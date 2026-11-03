
// Wavebox local profile: no server, no account. Data stays in this browser.
(() => {
  'use strict';

  const el = id => document.getElementById(id);
  const key = 'wavebox-profile-v1';
  const recentKey = 'wavebox-recent-v1';

  // Ossin Elite unlock configuration
  const rewardSongFile = 'assets/music/Kimiz.mp3';
  const rewardVideoFile = 'assets/videos/- Ossi Ketola x Stickyhand Scammer Cow - Kimiz (360p, h264).mp4';
  const remixBadgeMusic = window.REMIX_BADGE_MUSIC;
  const remixBadgeImage = 'assets/canvas/remix-badge.png';

  let rewardModal = null;
  let rewardCancelled = false;
  let rewardLastTime = 0;

  // The single player volume slider controls whichever badge soundtrack/video is active.
  window.waveboxSetBadgeVolume = value => {
    const volume = Math.max(0, Math.min(1, Number(value)));
    if (!rewardModal) return;
    const badgeId = window._waveboxRewardBadge;
    const video = rewardModal.querySelector('video');
    const audio = el('audio');
    if (badgeId === 'remix-badge') {
      if (audio) audio.volume = volume;
    } else if (video) {
      video.volume = volume;
    }
    const control = rewardModal.querySelector('#rewardMusicVolume');
    if (control) control.value = String(volume);
  };

  const badgeCatalog = [
    {
      id: 'ossin-elite',
      name: 'Ossin Elite',
      title: 'Ossin Elite',
      cover: 'https://th.bing.com/th/id/OIP.c-PXjITVBz0Zz9bIMTg0rgHaFj?w=241&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
      price: '59.90€/month',
      mark: '✦',
      unlocked: false
    },
    {
      id: 'remix-badge',
      name: 'Kaikki-Punaselle',
      title: 'Play the complete song to unlock',
      cover: remixBadgeImage,
      mark: '♫',
      price: '8.99€/month',
      unlocked: false,
      musicUnlock: true
    }
  ];

  const defaults = {
    name: 'Music Lover',
    bio: 'Your sound. Your space.',
    avatar: '',
    banner: '',
    badges: [],
    unlockedBadges: []
  };

  function read(k, fallback) {
    try {
      return JSON.parse(localStorage.getItem(k)) || fallback;
    } catch {
      return fallback;
    }
  }

  let profile = { ...defaults, ...read(key, {}) };

  profile.badges = Array.isArray(profile.badges) ? profile.badges : [];
  profile.unlockedBadges = Array.isArray(profile.unlockedBadges)
    ? profile.unlockedBadges
    : [];

  let recent = read(recentKey, []);

  profile.badges = profile.badges.filter(id =>
    badgeCatalog.some(b => b.id === id)
  );

  function save() {
    try {
      localStorage.setItem(key, JSON.stringify(profile));
      return true;
    } catch {
      return false;
    }
  }

  function avatar(target, url) {
    target.style.backgroundImage = url
      ? `url(${JSON.stringify(url)})`
      : '';
    target.textContent = url ? '' : '♫';
  }

  function isBadgeImage(cover) {
    return /^https?:\/\//i.test(cover) || /\.(png|jpe?g|webp|gif|svg)(?:[?#]|$)/i.test(cover || '');
  }

  function badgeCover(target, cover) {
    target.replaceChildren();

    if (isBadgeImage(cover)) {
      target.style.background = 'transparent';

      const img = document.createElement('img');
      img.src = cover;
      img.alt = '';
      img.draggable = false;
      img.onerror = () => {
        target.textContent = '✦';
      };

      target.append(img);
    } else {
      target.style.background = cover || '';
    }
  }

  function renderBadges() {
    const root = el('profileBadges');
    if (root) root.replaceChildren();

    profile.badges.forEach(id => {
      const badge = badgeCatalog.find(x => x.id === id);
      if (!badge) return;

      const wrap = document.createElement('span');
      wrap.className = 'profile-badge';
      wrap.title = badge.name;

      badgeCover(wrap, badge.cover);

      if (!isBadgeImage(badge.cover)) {
        wrap.textContent = badge.mark;
      }

      wrap.setAttribute('aria-label', badge.title);
      if (root) root.append(wrap);
    });

    renderBadgeCatalog();
  }

  function notifyBadgeLocked() {
    const old = document.querySelector('.badge-toast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.className = 'badge-toast';
    toast.setAttribute('role', 'alert');
    toast.textContent = 'Error, please pay to unlock this feature';

    document.body.append(toast);

    window.setTimeout(() => toast.remove(), 3500);
  }

  function hasBadgeAccess(badge) {
    return badge.unlocked ||
      profile.unlockedBadges.includes(badge.id);
  }

  function renderBadgeCatalog() {
    const root = el('badgeCatalog');
    if (!root) return;

    root.replaceChildren();

    badgeCatalog.forEach(badge => {
      const row = document.createElement('div');

      row.className = 'badge-option' +
        (hasBadgeAccess(badge) ? '' : ' badge-locked');
      row.dataset.badgeId = badge.id;

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.checked = profile.badges.includes(badge.id);
      check.disabled = !hasBadgeAccess(badge);
      check.setAttribute('aria-label', 'Select ' + badge.name);

      check.onchange = () => {
        if (!hasBadgeAccess(badge)) {
          check.checked = false;
          notifyBadgeLocked();
          return;
        }

        profile.badges = check.checked
          ? [...new Set([...profile.badges, badge.id])]
          : profile.badges.filter(id => id !== badge.id);

        if (!save()) {
          alert('Could not save your profile. Browser storage may be full.');
        }

        renderBadges();
      };

      const cover = document.createElement('span');
      cover.className = 'badge-cover';
      badgeCover(cover, badge.cover);

      if (!isBadgeImage(badge.cover)) {
        cover.textContent = badge.mark;
      }

      const text = document.createElement('span');
      text.className = 'badge-option-text';

      const name = document.createElement('strong');
      name.textContent = badge.name;

      const title = document.createElement('small');
      title.textContent = badge.title;

      text.append(name, title);

      const status = document.createElement('span');
      status.className = 'badge-lock-status';
      status.textContent = hasBadgeAccess(badge)
        ? 'Unlocked'
        : '🔒 Locked';

      row.append(check, cover, text, status);

      if (badge.musicUnlock && !hasBadgeAccess(badge)) {
        const playMusic = document.createElement('button');
        playMusic.type = 'button';
        playMusic.className = 'badge-free-unlock';
        playMusic.textContent = 'Play song to unlock';
        playMusic.onclick = () => startFreeUnlock(badge);
        row.append(playMusic);
        const hint = document.createElement('small');
        hint.className = 'badge-unlock-hint';
        hint.textContent = 'Play the complete Remix song to unlock this badge.';
        row.append(hint);
      }

      if (badge.price && !hasBadgeAccess(badge)) {
        const price = document.createElement('strong');
        price.className = 'badge-price';
        price.textContent = badge.price;
        row.append(price);
      }

      if (!hasBadgeAccess(badge) && !badge.musicUnlock) {
        const free = document.createElement('button');
        free.type = 'button';
        free.className = 'badge-free-unlock badge-video-unlock';
        free.textContent = 'Unlock for free';
        free.onclick = () => startFreeUnlock(badge);

        row.append(free);

        const hint = document.createElement('small');
        hint.className = 'badge-unlock-hint';
        hint.textContent =
          'Watch the entire unlock video to unlock this badge.';

        row.append(hint);
      }

      root.append(row);
    });
  }

  function startBadgeSoundtrack(badge) {
    if (badge.id !== 'remix-badge' || !remixBadgeMusic) return;
    if (typeof window.waveboxPlayBadgeMusic === 'function') {
      window.waveboxPlayBadgeMusic(remixBadgeMusic);
    }
  }

  function closeRewardVideo() {
    rewardCancelled = true;
    window._waveboxRewardBadge = null;

    const video = rewardModal?.querySelector('video');
    const wasRemix = rewardModal?.getAttribute('aria-label') === 'Remix Badge unlock video';
    if (wasRemix) { const audio = el('audio'); if (audio) audio.pause(); }

    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }

    if (rewardModal) {
      rewardModal.remove();
      rewardModal = null;
    }

    document.querySelectorAll('.badge-free-unlock').forEach(button => {
      button.textContent = button.classList.contains('badge-video-unlock')
        ? 'Unlock for free'
        : 'Play song to unlock';
      button.disabled = false;
    });
  }

  function finishRewardVideo() {
    const id = window._waveboxRewardBadge;

    if (!id || rewardCancelled) return;

    const video = rewardModal?.querySelector('video');
    const remixAudio = id === 'remix-badge' ? el('audio') : null;

    // Only accept completion when the full reward media really reaches its end.
    if (id === 'remix-badge') {
      if (!remixAudio || !remixAudio.ended) return;
    } else if (!video || !video.ended) {
      return;
    }

    window._waveboxRewardBadge = null;

    if (rewardModal) {
      rewardModal.remove();
      rewardModal = null;
    }

    if (!profile.unlockedBadges.includes(id)) {
      profile.unlockedBadges.push(id);
    }

    if (!save()) {
      alert('Could not save your badge. Browser storage may be full.');
      return;
    }

    renderBadgeCatalog();

    const badge = badgeCatalog.find(item => item.id === id);
    renderBadges();
    alert((badge?.name || 'Badge') + ' unlocked! You can now select it on your profile.');
  }

  function startFreeUnlock(badge) {
    if (hasBadgeAccess(badge)) return;

    closeRewardVideo();

    rewardCancelled = false;
    rewardLastTime = 0;
    window._waveboxRewardBadge = badge.id;

    const modal = document.createElement('div');
    modal.className = 'reward-video-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', badge.name + ' unlock');

    // Inline styling makes the video overlay work without extra CSS.
    Object.assign(modal.style, {
      position: 'fixed',
      inset: '0',
      zIndex: '999999',
      background: 'rgba(0,0,0,0.94)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    });

    modal.innerHTML = `
      <div class="reward-video-panel" style="
        width: min(900px, 100%);
        background: #171225;
        color: white;
        border-radius: 16px;
        padding: 18px;
        box-sizing: border-box;
        font-family: inherit;
      ">
        <div class="reward-video-heading" style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 15px;
        ">
          <div>
            <strong style="display:block;font-size:20px;">
              ${badge.name} unlock
            </strong>
            <span style="display:block;margin-top:5px;opacity:.75;">
              ${badge.id === 'remix-badge' ? 'Play the full Remix song to unlock your badge' : 'Watch the full video to unlock your badge'}
            </span>
          </div>

          <button type="button"
            class="reward-video-close"
            aria-label="Close video"
            style="
              border:0;
              border-radius:8px;
              padding:10px 14px;
              background:#392d50;
              color:white;
              cursor:pointer;
              font-size:18px;
            ">✕</button>
        </div>

        <div class="reward-video-frame" style="
          width:100%;
          aspect-ratio:16/9;
          background:black;
          overflow:hidden;
          border-radius:10px;
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          ${badge.id === 'remix-badge'
            ? `<img src="${remixBadgeImage}" alt="Remix Badge artwork" style="display:block;width:100%;height:100%;object-fit:contain;">`
            : `<video
                id="ossiRewardVideo"
                autoplay
                playsinline
                preload="auto"
                disablepictureinpicture
                controlslist="nodownload noplaybackrate noremoteplayback"
                oncontextmenu="return false"
                style="display:block;width:100%;height:100%;object-fit:contain;background:black;">
                <source src="${rewardVideoFile}" type="video/mp4">
                Your browser cannot play this video.
              </video>`}
        </div>

        <label style="display:flex;align-items:center;justify-content:center;gap:12px;margin:14px 0 0;color:#fff;font-size:13px;">
          Volume
          <input id="rewardMusicVolume" type="range" min="0" max="1" step="0.01" value="0.8" style="width:min(260px,55vw);accent-color:#1ed760;">
        </label>
        <p class="reward-video-note" style="margin:10px 0 0;text-align:center;opacity:.8;">
          ${badge.id === 'remix-badge' ? 'The badge unlocks only when the full song finishes.' : 'The badge unlocks only when the video finishes.'}
        </p>
      </div>
    `;

    document.body.append(modal);
    rewardModal = modal;

    modal.querySelector('.reward-video-close')
      .addEventListener('click', closeRewardVideo);

    const button = document.querySelector(`.badge-option[data-badge-id="${badge.id}"] .badge-free-unlock`);

    if (button) {
      button.textContent = badge.id === 'remix-badge' ? 'Song playing…' : 'Video playing…';
      button.disabled = true;
    }

    const video = modal.querySelector('#ossiRewardVideo');
    const musicAudio = el('audio');
    const isRemix = badge.id === 'remix-badge';
    if (isRemix) {
      // Remix uses the existing standalone track; its end event grants the badge.
      startBadgeSoundtrack(badge);
    } else {
      // Ossin Elite's volume control adjusts the audio embedded in its unlock video.
      video.volume = Number(el('volume')?.value ?? 0.8);
      if (musicAudio) musicAudio.pause();
    }
    const volumeControl = modal.querySelector('#rewardMusicVolume');
    if (volumeControl) {
      const playerVolume = el('volume');
      const initialVolume = Number(playerVolume?.value ?? musicAudio?.volume ?? 0.8);
      volumeControl.value = String(initialVolume);
      if (isRemix && musicAudio) musicAudio.volume = initialVolume;
      else if (video) video.volume = initialVolume;
      volumeControl.addEventListener('input', () => {
        const volume = Number(volumeControl.value);
        if (playerVolume) playerVolume.value = volumeControl.value;
        if (isRemix && musicAudio) musicAudio.volume = volume;
        else if (video) video.volume = volume;
      });
    }

    if (isRemix) {
      // Do not allow skipping through the Remix song to earn the badge.
      if (musicAudio) {
        musicAudio.controls = false;
        musicAudio.addEventListener('seeking', () => {
          if (rewardCancelled || !rewardModal) return;
          if (Math.abs(musicAudio.currentTime - rewardLastTime) > 1.5) {
            musicAudio.currentTime = rewardLastTime;
          }
        });
        musicAudio.addEventListener('timeupdate', () => {
          if (!musicAudio.seeking) rewardLastTime = musicAudio.currentTime;
        });
        musicAudio.addEventListener('ended', finishRewardVideo, { once: true });
        musicAudio.addEventListener('error', () => {
          if (rewardCancelled) return;
          alert('The Kaikki-Punaselle song could not be loaded. Check the music file.');
          closeRewardVideo();
        }, { once: true });
      }
      const note = modal.querySelector('.reward-video-note');
      if (musicAudio?.paused && note) {
        note.textContent = 'Tap Play to start the Remix song. Let it finish to unlock.';
      }
      // If autoplay was blocked, the site player Play button can start the track.
    } else {
      // No playback controls are shown for Ossin Elite.
      video.controls = false;

      // Prevent ordinary seeking forward or backward.
      video.addEventListener('seeking', () => {
        if (rewardCancelled || !rewardModal) return;
        if (Math.abs(video.currentTime - rewardLastTime) > 1.5) {
          video.currentTime = rewardLastTime;
        }
      });

      video.addEventListener('timeupdate', () => {
        if (!video.seeking) rewardLastTime = video.currentTime;
      });

      video.addEventListener('ended', finishRewardVideo);

      video.addEventListener('error', () => {
        if (rewardCancelled) return;
        alert('The unlock video could not be loaded. Check the video filename and format.');
        closeRewardVideo();
      });

      video.addEventListener('contextmenu', event => event.preventDefault());

      video.play().catch(() => {
        const note = modal.querySelector('.reward-video-note');
        if (note) note.textContent = 'Click the video to start playback. Watch it to the end to unlock.';
        video.addEventListener('click', () => {
          video.play().catch(() => alert('Your browser could not play this video.'));
        }, { once: true });
      });
    }
  }

  function render() {
    el('profileName').textContent = profile.name || defaults.name;
    el('profileBio').textContent = profile.bio || defaults.bio;

    avatar(el('profileAvatar'), profile.avatar);

    el('profileBanner').style.backgroundImage = profile.banner
      ? `linear-gradient(#100a2a30,#100a2a30),url(${JSON.stringify(profile.banner)})`
      : '';

    el('profileCount').textContent = library.length + ' playlists';

    renderBadges();

    const root = el('profilePlaylists');
    root.replaceChildren();

    library.forEach(p => {
      const b = document.createElement('button');
      b.className = 'playlist-card';

      const art = document.createElement('div');
      art.className = 'card-art';
      artwork(art, p.cover, p.color);

      const name = document.createElement('strong');
      name.textContent = p.name;

      const count = document.createElement('span');
      count.textContent = p.songs.length + ' songs';

      b.append(art, name, count);
      b.onclick = () => openPlaylist(p);

      root.append(b);
    });

    const r = el('profileRecent');
    r.replaceChildren();

    if (!recent.length) {
      const note = document.createElement('p');
      note.textContent = 'Songs you play will appear here.';
      r.append(note);
    }

    recent.forEach(item => {
      const b = document.createElement('button');

      const playlist = library.find(p => p.id === item.pid);
      const song = playlist?.songs.find(s => s.file === item.file);

      if (!song || !playlist) return;

      const img = document.createElement('img');
      img.alt = '';
      img.src = song.cover || playlist.cover || '';

      const wrap = document.createElement('span');
      const t = document.createElement('strong');
      const a = document.createElement('small');

      t.textContent = song.title;
      a.textContent = song.artist || playlist.name;

      wrap.append(t, a);
      b.append(img, wrap);

      b.onclick = () =>
        playTrack(playlist, playlist.songs.indexOf(song));

      r.append(b);
    });
  }

  function show() {
    hideSheet();

    el('profileSection').hidden = false;
    el('overview').hidden = true;
    el('tracksSection').hidden = true;

    el('pageTitle').textContent = 'Your profile';
    el('pageSubtitle').textContent = 'Made for your music.';

    render();
    window.scrollTo(0, 0);
  }

  function hide() {
    el('profileSection').hidden = true;
  }

  window.waveboxHideProfile = hide;

  window.waveboxRecordPlay = (p, s) => {
    recent = [
      { pid: p.id, file: s.file },
      ...recent.filter(x => x.pid !== p.id || x.file !== s.file)
    ].slice(0, 12);

    try {
      localStorage.setItem(recentKey, JSON.stringify(recent));
    } catch {}

    if (!el('profileSection').hidden) {
      render();
    }
  };

  el('profileBtn').onclick = show;
  el('mobileProfile').onclick = show;

  el('editProfile').onclick = () => {
    el('profileNameInput').value = profile.name;
    el('profileBioInput').value = profile.bio;
    el('profileAvatarInput').value = '';
    el('profileBannerInput').value = '';

    renderBadgeCatalog();
    el('profileModal').hidden = false;
  };

  el('closeProfile').onclick = () => {
    el('profileModal').hidden = true;
  };

  el('profileModal').onclick = e => {
    if (e.target === el('profileModal')) {
      el('profileModal').hidden = true;
    }
  };

  async function imageFile(file, max) {
    if (!file) return null;

    if (!file.type.startsWith('image/')) {
      throw Error('Choose an image file.');
    }

    const u = URL.createObjectURL(file);

    try {
      const img = new Image();
      img.src = u;
      await img.decode();

      const scale = Math.min(
        1,
        max / Math.max(img.width, img.height)
      );

      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.width * scale));
      c.height = Math.max(1, Math.round(img.height * scale));

      c.getContext('2d').drawImage(
        img, 0, 0, c.width, c.height
      );

      return c.toDataURL('image/jpeg', 0.78);
    } finally {
      URL.revokeObjectURL(u);
    }
  }

  el('profileForm').onsubmit = async e => {
    e.preventDefault();

    const btn = el('profileForm').querySelector('[type=submit]');
    btn.disabled = true;

    try {
      const next = {
        ...profile,
        name: el('profileNameInput').value.trim().slice(0, 40)
          || defaults.name,
        bio: el('profileBioInput').value.trim().slice(0, 180)
      };

      const a = el('profileAvatarInput').files[0];
      const b = el('profileBannerInput').files[0];

      if (a) next.avatar = await imageFile(a, 320);
      if (b) next.banner = await imageFile(b, 1100);

      profile = next;

      if (!save()) {
        alert('Your browser storage is full. Try smaller pictures.');
      }

      render();
      el('profileModal').hidden = true;
    } catch (err) {
      alert(err.message || 'Could not save image');
    } finally {
      btn.disabled = false;
    }
  };

  el('resetProfile').onclick = () => {
    if (!confirm(
      'Reset your profile name, bio and pictures on this device?'
    )) return;

    // Reset profile details, but keep every badge already unlocked or selected.
    const completedBadges = [...profile.unlockedBadges];
    const selectedBadges = [...profile.badges];

    profile = {
      ...defaults,
      unlockedBadges: completedBadges,
      badges: selectedBadges
    };
    save();
    render();

    el('profileModal').hidden = true;
  };

  render();
})();
