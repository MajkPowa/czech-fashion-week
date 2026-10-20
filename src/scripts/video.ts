type VideoState = { visible: boolean; pending: boolean; active: boolean; blocked: boolean; dispose: () => void };

const videos = new Map<HTMLVideoElement, VideoState>();
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const preferenceKey = 'cfw:motion-paused';
let manuallyPaused = false;
let initialised = false;
try { manuallyPaused = localStorage.getItem(preferenceKey) === 'true'; } catch { /* Storage is optional. */ }

const motionPaused = () => manuallyPaused || reducedMotion.matches;
const canPlay = (video: HTMLVideoElement, state: VideoState) => state.active && state.visible
  && !document.hidden && !motionPaused() && !video.closest('[hidden]');

async function syncVideo(video: HTMLVideoElement, state: VideoState) {
  if (!canPlay(video, state)) {
    video.pause();
    if (motionPaused()) video.classList.remove('is-ready');
    return;
  }
  if (!video.paused || state.pending) return;
  if (video.dataset.videoSrc) {
    video.src = video.dataset.videoSrc;
    delete video.dataset.videoSrc;
  }
  state.pending = true;
  try {
    await video.play();
    if (videos.get(video) !== state) return;
    state.blocked = false;
    if (!canPlay(video, state)) video.pause();
  } catch {
    if (videos.get(video) !== state) return;
    state.blocked = Boolean(canPlay(video, state));
    video.dataset.videoState = state.blocked ? 'blocked' : 'paused';
  } finally { state.pending = false; }
}

const syncAll = () => videos.forEach((state, video) => { void syncVideo(video, state); });
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target as HTMLVideoElement;
    const state = videos.get(video);
    if (!state) return;
    state.visible = entry.isIntersecting && entry.intersectionRatio >= .1;
    void syncVideo(video, state);
  });
}, { threshold: [0, .1] });

function reflectPreference() {
  const paused = motionPaused();
  document.documentElement.dataset.motionPaused = String(paused);
  document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach(button => {
    button.hidden = false;
    button.disabled = reducedMotion.matches;
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = reducedMotion.matches ? 'Pohyb omezen v systému' : manuallyPaused ? 'Povolit pohyb' : 'Omezit pohyb';
  });
  syncAll();
  document.dispatchEvent(new CustomEvent('cfw:motion-change'));
}

function initialiseRuntime() {
  if (initialised) return;
  initialised = true;
  document.addEventListener('visibilitychange', syncAll);
  reducedMotion.addEventListener('change', reflectPreference);
  const retryBlocked = () => videos.forEach((state, video) => { if (state.blocked) void syncVideo(video, state); });
  document.addEventListener('pointerdown', retryBlocked, { passive: true });
  document.addEventListener('keydown', retryBlocked);
  document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      manuallyPaused = !manuallyPaused;
      try { localStorage.setItem(preferenceKey, String(manuallyPaused)); } catch { /* Optional persistence. */ }
      reflectPreference();
    });
  });
  reflectPreference();
}

/** Observe a silent loop; return cleanup for filtered cards and dialogs. */
export function observeAutoplay(video: HTMLVideoElement): () => void {
  initialiseRuntime();
  const existing = videos.get(video);
  if (existing) return existing.dispose;
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.controls = false;
  const ready = () => { video.classList.add('is-ready'); video.dataset.videoState = 'playing'; };
  const pause = () => { video.dataset.videoState = 'paused'; };
  const error = () => { video.classList.remove('is-ready'); video.dataset.videoState = 'error'; };
  const state: VideoState = { visible: false, pending: false, active: true, blocked: false, dispose: () => {} };
  state.dispose = () => {
    state.active = false;
    observer.unobserve(video);
    video.pause();
    video.removeEventListener('playing', ready);
    video.removeEventListener('pause', pause);
    video.removeEventListener('error', error);
    videos.delete(video);
  };
  video.addEventListener('playing', ready);
  video.addEventListener('pause', pause);
  video.addEventListener('error', error);
  videos.set(video, state);
  observer.observe(video);
  return state.dispose;
}

export function initialiseAutoplay() {
  initialiseRuntime();
  document.querySelectorAll<HTMLVideoElement>('video[data-video-autoplay]:not([data-gallery-preview])').forEach(observeAutoplay);
  window.addEventListener('pagehide', () => videos.forEach((_state, video) => video.pause()));
  window.addEventListener('pageshow', syncAll);
}
