(() => {
    const sec = document.getElementById('presence');
    if (!sec) return;
    const M = {
        "cols": 104,
        "rows": 87,
        "lon0": -25,
        "lon1": 125,
        "lat0": -36,
        "lat1": 62,
        "ar": 1.3733,
        "mask": ["00000000000000000000011111111000111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000000000111111111000111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000000000011111111100010001111111111111111111111111111111111111111111111111111111111111111111", "00000000000000000000011111111000011111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000100000001001111000001111111111111111111111111111111111111111111111111111111111111111111111", "00000000000001100000000001110100101111111111111111111111111111111111111111111111111111111111111111111111", "00000000000001110000000110111000111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000001110000001111100000111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000010111000000100000101111111111111111111111111111111111111111111111111111111111111111111111111", "00000000001110011000000111111111111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000110111100111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "00000000001001111100111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000111101111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000000011111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000001111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000001111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "00000000000000001111111111111111111111001001111111100011111111111111111111111111111111111111111111111111", "00000000000000001111111111001111111111001101111111000111111111111111111111111111111111111111111111111111", "00000000000000001111111011011111111110000000111111001111111111111111111111111111111111111111111111111111", "00000000000111111110000001100111111110000000001111000111111111111111111111111111111111111111111111111111", "00000000000111111110000001100011111100001000001111000111111111111111111111111111111111111111111111111111", "00000000000111111100000100011001111100111111111111110001111111111111111111111111111111111111111111111111", "00000000000111111000000100000101100111111111111111100011111111111111111111111111111111111111111111110111", "00000000000111111000000000001000100011111111111111100001111111111111111111111111111111111111111111100000", "00000000000111110000000001100000110011111111111111100011111111111111111111111111111111111111111111101000", "00000000000001000001111110000000000001111011111111111111111111111111111111111111111111111111111111111000", "00000000000000001111111100000000000000000011111111111111111111111111111111111111111111111111111111110000", "00000000000001111111111100000000000000000011111111111111111111111111111111111111111111111111111111111000", "00000000000111111111111110000000000000000111111111111111111111111111111111111111111111111111111111111000", "00000000000111111111111111110001110000000111111111111111111111111111111111111111111111111111111111111100", "00000000001111111111111111111001111111111111111111111111111111111111111111111111111111111111111111111000", "00000000000111111111111111111111111111111111111111101111111111111111111111111111111111111111111111111100", "00000000011111111111111111111111111111111111111111001111111111111111111111111111111111111111111111111000", "00000000111111111111111111111111111111110011111111100011111111111111111111111111111111111111111111111000", "00000001111111111111111111111111111111110011111111110000111111111111111111111111111111111111111111110000", "00000001111111111111111111111111111111111001111111110000000111011111111111111111111111111111111111110000", "00000011111111111111111111111111111111111101111111111111000000001111111111111111111111111111111111101000", "00000011111111111111111111111111111111111100111111111111110000000111111111111111111111111111111111000000", "00000111111111111111111111111111111111111100111111111111110000000111111111111100011111111111111000000000", "00000011111111111111111111111111111111111110011111111111110000000000111111111100011111111110010000000000", "00000011111111111111111111111111111111111110011111111111100000000001111111110000001111111100110000000000", "00000011111111111111111111111111111111111111001111111111000000000000111111100000000111111110000000000100", "00000111111111111111111111111111111111111111001111111100000000000000111111000000001111111110000000001100", "00000011111111111111111111111111111111111111100111111100000000000000111110000000000001111111100000001100", "00000111111111111111111111111111111111111111100111100000000000000000111100000000000001111111000000000000", "00000011111111111111111111111111111111111111111110000000000000000000011110000000000000111111100000000100", "00000011111111111111111111111111111111111111111000000000000000000000011100000000000001001111100000000001", "00000001111111111111111111111111111111111111111101111000000000000000001110000000000000000111000000000000", "00000001111111111111111111111111111111111111111111110000000000000000001110000000000001000010000000000000", "00000000111111111111111111111111111111111111111111110000000000000000000001000000000001100000000000000011", "00000000011111111111111111111111111111111111111111100000000000000000000011000000000000100000000000000101", "00000000001111111100011111111111111111111111111111100000000000000000000000000000000000011000000000100000", "00000000000100000000010111111111111111111111111111000000000000000000000000000000000110011000000011100000", "00000000000000000000000011111111111111111111111111000000000000000000000000000000000001001000000011100000", "00000000000000000000000111111111111111111111111100000000000000000000000000000000000001101000001111100000", "00000000000000000000000011111111111111111111111100000000000000000000000000000000000000111000011111100111", "00000000000000000000000111111111111111111111110000000000000000000000000000000000000000111000111111000000", "00000000000000000000000011111111111111111111110000000000000000000000000000000000000000011100001111001100", "00000000000000000000000011111111111111111111100000000000000000000000000000000000000000011100001111010100", "00000000000000000000000001111111111111111111100000000000000000000000000000000000000000000110000000001010", "00000000000000000000000001111111111111111111000000000000000000000000000000000000000000000100000000000000", "00000000000000000000000000111111111111111111100000000000000000000000000000000000000000000011101000000000", "00000000000000000000000000111111111111111111000000000000000000000000000000000000000000000000011110000000", "00000000000000000000000000111111111111111111100000000000000000000000000000000000000000000000000000000001", "00000000000000000000000000111111111111111111100000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000011111111111111111100000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000111111111111111111100000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000111111111111111111110000010000000000000000000000000000000000000000000000000000", "00000000000000000000000001111111111111111111100001110000000000000000000000000000000000000000000000000001", "00000000000000000000000001111111111111111111100011110000000000000000000000000000000000000000000000000011", "00000000000000000000000001111111111111111110000111100000000000000000000000000000000000000000000000000011", "00000000000000000000000000111111111111111100000011100000000000000000000000000000000000000000000000000111", "00000000000000000000000000111111111111111000000111100000000000000000000000000000000000000000000000011111", "00000000000000000000000000011111111111111100000111100000000000000000000000000000000000000000000001111111", "00000000000000000000000000011111111111111000000111000000000000000000000000000000000000000000000011111111", "00000000000000000000000000011111111111111100000011000000000000000000000000000000000000000000000011111111", "00000000000000000000000000011111111111110000000010000000000000000000000000000000000000000000000011111111", "00000000000000000000000000001111111111110000000000000000000000000000000000000000000000000000000011111111", "00000000000000000000000000001111111111100000000000000000000000000000000000000000000000000000000011111111", "00000000000000000000000000000111111111110000000000000000000000000000000000000000000000000000000001111111", "00000000000000000000000000000111111101000000000000000000000000000000000000000000000000000000000001111111", "00000000000000000000000000000011111111000000000000000000000000000000000000000000000000000000000001111111", "00000000000000000000000000000111111110000000000000000000000000000000000000000000000000000000000001111111", "00000000000000000000000000000011111100000000000000000000000000000000000000000000000000000000000000111110", "00000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000001110000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]
    };
    const L = [{
        n: 'Kuwait',
        c: 'KW',
        lon: 47.97,
        lat: 29.37,
        h: 52,
        s: 'l',
        hq: 1,
        items: [
            ['seas-and-deserts', 'Seas & Deserts', 'Showroom and four Garmin boutiques'],
            ['elite-yachts', 'Elite Yachts', 'Azimut Yachts dealer'],
            ['fair-winds-yachts', 'Fair Winds Yachts', 'Yacht sales, brokerage and charter'],
            ['marine-yard', 'Marine Yard', 'Luxury yacht maintenance'],
            ['power-sports', 'Power Sports', 'Can-Am, Sea-Doo, Evinrude'],
            ['super-marine', 'Super Marine', 'Marine equipment and accessories'],
            ['comil', 'COMIL', 'Commercial and military supplies'],
            ['gourmet-food', 'Gourmet Food', 'Alto, Piccola Milano, Terra'],
            ['franchise-food', 'Franchise Food', 'Jamba franchisee'],
            ['trend', 'TREND', 'Orlebar Brown, Culti, Sundek'],
            ['international', 'International', 'Shipping and customs clearance'],
            ['point', 'POINT', 'Real estate'],
            ['vision-investments', 'Vision Investments', 'Investments']
        ]
    }, {
        n: 'Saudi Arabia',
        c: 'KSA',
        lon: 39.2,
        lat: 21.5,
        h: 44,
        s: 'l',
        items: [
            ['elite-yachts', 'Elite Yachts', 'Jeddah Yacht Club'],
            ['marine-yard', 'Marine Yard', 'Jeddah']
        ]
    }, {
        n: 'Qatar',
        c: 'QA',
        lon: 51.5,
        lat: 25.3,
        h: 34,
        s: 'r',
        items: [
            ['seas-and-deserts', 'Seas & Deserts', 'Doha sales'],
            ['elite-yachts', 'Elite Yachts', 'Musherib, Doha'],
            ['marine-yard', 'Marine Yard', 'Doha']
        ]
    }, {
        n: 'UAE',
        c: 'AE',
        lon: 55.3,
        lat: 25.2,
        h: 68,
        s: 'r',
        items: [
            ['seas-and-deserts', 'Seas & Deserts', 'Al Quoz showroom, Dubai'],
            ['elite-yachts', 'Elite Yachts', 'Al Seef and Dubai Harbour'],
            ['marine-yard', 'Marine Yard', 'Al Quoz, Dubai'],
            ['trend', 'TREND', 'Sundek, Jumeirah']
        ]
    }, {
        n: 'Maldives',
        c: 'MV',
        lon: 73.5,
        lat: 4.2,
        h: 46,
        s: 'r',
        items: [
            ['elite-yachts', 'Elite Yachts', 'Azimut Yachts dealer'],
            ['marine-yard', 'Marine Yard', 'Yacht maintenance']
        ]
    }, {
        n: 'Monaco',
        c: 'MC',
        lon: 7.4,
        lat: 43.7,
        h: 30,
        s: 'l',
        items: [
            ['elite-yachts', 'Elite Yachts', 'Monte Carlo']
        ]
    }, {
        n: 'Switzerland',
        c: 'CH',
        lon: 8.2,
        lat: 46.8,
        h: 62,
        s: 'r',
        items: []
    }];
    const rm = matchMedia('(prefers-reduced-motion:reduce)').matches,
        mob = () => innerWidth < 1101;
    const mxr = l => l * Math.PI / 180,
        myr = a => 1.25 * Math.log(Math.tan(Math.PI / 4 + .4 * a * Math.PI / 180));
    const nx = lo => (mxr(lo) - mxr(M.lon0)) / (mxr(M.lon1) - mxr(M.lon0));
    const ny = la => (myr(M.lat1) - myr(la)) / (myr(M.lat1) - myr(M.lat0));
    const st = sec.querySelector('.stage'),
        pl = st.querySelector('.plane'),
        cv = pl.querySelector('canvas'),
        cx = cv.getContext('2d'),
        pop = sec.querySelector('.pop'),
        locs = sec.querySelector('.locs'),
        wrap = sec.querySelector('.stagewrap');
    pl.style.aspectRatio = M.ar;
    const si = document.createElement('div');
    si.className = 'stage-in';
    while (st.firstChild) si.append(st.firstChild);
    st.append(si);
    const hint = document.createElement('p');
    hint.className = 'hint';
    hint.textContent = 'Swipe the map sideways to explore';
    st.after(hint);
    const ac = document.createElement('canvas');
    ac.className = 'arcs';
    si.append(ac);
    const ax = ac.getContext('2d');
    const ov = document.createElement('div');
    ov.className = 'pins';
    si.append(ov);
    const D = [];
    M.mask.forEach((r, j) => [...r].forEach((c, i) => c === '1' && D.push([(i + (j & 1 ? .5 : 0) + .5) / M.cols, (j + .5) / M.rows])));
    let cur = null,
        tm, started = false,
        vis = false,
        t0 = 0,
        reveal = rm ? 1 : 0,
        glow = 0,
        gp = null,
        dirty = true;

    const open = p => {
        clearTimeout(tm);
        cur = p;
        gp = p;
        L.forEach(q => {
            q.el.classList.toggle('on', q === p);
            q.up.classList.toggle('on', q === p);
            q.chip.classList.toggle('on', q === p);
        });
        pop.className = 'pop open' + (p.items.length > 6 ? ' wide' : '');
        pop.innerHTML = `<h3>${p.n}${p.hq ? '<em>Headquarters</em>' : ''}</h3>` + (p.items.length ?
            '<ul>' + p.items.map((t, k) => `<li style="--d:${k * 35}ms"><a href="companies/${t[0]}.html"><b>${t[1]}</b><small>${t[2]}</small></a></li>`).join('') + '</ul>' :
            '<p>Direct operations of Al Ameeri Group.</p>') + '<button class="x" aria-label="Close">&times;</button>';
        pop.querySelector('.x').onclick = close;
        p.side = null;
        place();
    };
    const close = () => {
        cur = null;
        pop.classList.remove('open');
        L.forEach(q => {
            q.el.classList.remove('on');
            q.up.classList.remove('on');
            q.chip.classList.remove('on');
        });
    };
    const centerOn = p => {
        if (st.scrollWidth <= st.clientWidth) return;
        const x = p.base.getBoundingClientRect().left - si.getBoundingClientRect().left;
        st.scrollTo({
            left: x - st.clientWidth / 2,
            behavior: rm ? 'auto' : 'smooth'
        });
    };
    const place = () => {
        if (!cur || mob()) return;
        const w = wrap.getBoundingClientRect(),
            h = cur.btn.getBoundingClientRect(),
            pw = pop.offsetWidth,
            ph = pop.offsetHeight,
            g = 18,
            cx0 = h.left - w.left + h.width / 2,
            ty = h.top - w.top,
            fy = cur.el.getBoundingClientRect().top - w.top;
        const C = [
            [h.right - w.left + g, ty + h.height / 2 - ph / 2],
            [cx0 - pw / 2, fy + 26],
            [h.left - w.left - pw - g, ty + h.height / 2 - ph / 2],
            [cx0 - pw / 2, ty - ph - g],
            [w.width - pw - 8, 8],
            [8, 8],
            [w.width - pw - 8, w.height - ph - 8],
            [8, w.height - ph - 8]
        ];
        const fit = ([x, y]) => [Math.max(8, Math.min(x, w.width - pw - 8)), Math.max(8, Math.min(y, w.height - ph - 8))];
        if (cur.side == null) {
            const O = L.flatMap(q => {
                const a = q.btn.getBoundingClientRect(),
                    f = q.el.getBoundingClientRect(),
                    x = (a.left + a.right) / 2 - w.left;
                return [
                    [a.left - w.left, a.top - w.top, a.right - w.left, a.bottom - w.top],
                    [x - 3, a.bottom - w.top, x + 3, f.top - w.top + 6]
                ];
            });
            let bs = 1e9;
            C.forEach((c, i) => {
                const [X, Y] = fit(c);
                let s = i * 25 + Math.abs(X - c[0]) + Math.abs(Y - c[1]) * .5 + Math.hypot(X + pw / 2 - cx0, Y + ph / 2 - ty) * .08;
                O.forEach(o => {
                    s += .2 * Math.max(0, Math.min(X + pw, o[2]) - Math.max(X, o[0])) * Math.max(0, Math.min(Y + ph, o[3]) - Math.max(Y, o[1]));
                });
                if (s < bs) {
                    bs = s;
                    cur.side = i;
                }
            });
        }
        const [X, Y] = fit(C[cur.side]);
        pop.style.left = X + 'px';
        pop.style.top = Y + 'px';
    };

    L.forEach((p, i) => {
        p.x = nx(p.lon);
        p.y = ny(p.lat);
        const e = document.createElement('div');
        e.className = 'pin';
        e.style.cssText = `left:${p.x * 100}%;top:${p.y * 100}%;--i:${i}`;
        e.innerHTML = '<i class="ring"></i><i class="base"></i>';
        pl.append(e);
        p.el = e;
        p.base = e.querySelector('.base');
        const u = document.createElement('div');
        u.className = 'up';
        u.style.cssText = `--h:${p.h}px;--i:${i}`;
        u.innerHTML = `<div class="drop"><i class="stem"></i><button class="head" aria-label="${p.n}"><span>${p.c}</span></button><b class="lbl ${p.s}">${p.n}</b></div>`;
        ov.append(u);
        p.up = u;
        p.btn = u.querySelector('button');
        p.btn.onpointerenter = ev => ev.pointerType === 'mouse' && open(p);
        p.btn.onpointerleave = ev => ev.pointerType === 'mouse' && (tm = setTimeout(close, 400));
        p.btn.onclick = () => open(p);
        const c = document.createElement('button');
        c.textContent = p.n + (p.hq ? ' (HQ)' : '');
        c.onclick = () => {
            open(p);
            centerOn(p);
        };
        locs.append(c);
        p.chip = c;
    });
    D.forEach(d => {
        let m = 1e9;
        L.forEach(p => {
            m = Math.min(m, Math.hypot(d[0] - p.x, (d[1] - p.y) / M.ar));
        });
        d[2] = Math.max(0, 1 - m / (2.8 / M.cols)) * .85;
    });
    pop.onpointerenter = () => clearTimeout(tm);
    pop.onpointerleave = () => {
        tm = setTimeout(close, 400);
    };
    document.addEventListener('click', e => {
        if (cur && !e.target.closest('.up,.pin,.pop,.locs')) close();
    });
    document.addEventListener('keydown', e => e.key === 'Escape' && close());

    const COL = {
        gt: [207, 181, 78],
        gs: [140, 116, 21]
    };
    const mix = (a, b, f) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * f)).join(',')})`;
    const draw = () => {
        const dpr = Math.min(devicePixelRatio || 1, 2),
            w = cv.clientWidth,
            h = cv.clientHeight;
        if (!w) return;
        if (cv.width !== Math.round(w * dpr)) {
            cv.width = Math.round(w * dpr);
            cv.height = Math.round(h * dpr);
        }
        cx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cx.clearRect(0, 0, w, h);
        const r0 = w / M.cols * .34,
            R = w * .11;
        for (const [x, y, f0] of D) {
            let k = Math.min(1, Math.max(0, (reveal * 1.6 - x * .6 - y * .1) / .5));
            k = 1 - (1 - k) * (1 - k);
            if (k <= 0) continue;
            const px = x * w,
                py = y * h;
            let f = 0;
            const tc = [186 - 26 * y, 197 - 23 * y, 203 - 21 * y],
                sc = [140 - 18 * y, 156 - 17 * y, 166 - 15 * y];
            if (gp && glow > .01) {
                const d = Math.hypot(px - gp.x * w, py - gp.y * h);
                f = glow * Math.pow(Math.max(0, 1 - d / R), 2);
            }
            f = Math.max(f, f0 * k);
            const H = 2.5 + f * 7,
                top = py - H - (1 - k) * 12,
                r = r0 * (.5 + .5 * k) * (1 + f * .5);
            cx.globalAlpha = k;
            cx.fillStyle = mix(sc, COL.gs, f);
            for (let i = 0; i < 3; i++) {
                cx.beginPath();
                cx.arc(px, py - H * i / 3 - (1 - k) * 12 * i / 3, r, 0, 6.2832);
                cx.fill();
            }
            cx.fillStyle = mix(tc, COL.gt, f);
            cx.beginPath();
            cx.arc(px, top, r, 0, 6.2832);
            cx.fill();
        }
        cx.globalAlpha = 1;
    };
    const pinPos = () => {
        const r = si.getBoundingClientRect();
        L.forEach(p => {
            const b = p.base.getBoundingClientRect();
            if (!b.width) return;
            const x = b.left + b.width / 2 - r.left,
                y = b.top + b.height / 2 - r.top,
                k = Math.max(.8, Math.min(1.3, b.width / 8));
            p.sx = x;
            p.sy = y;
            p.up.style.transform = `translate(${x}px,${y}px) scale(${k})`;
            p.up.style.zIndex = Math.round(y) + (p === cur ? 1000 : 0);
        });
    };
    const drawArcs = ts => {
        const w = si.clientWidth,
            h = si.clientHeight,
            dpr = Math.min(devicePixelRatio || 1, 2);
        if (ac.width !== Math.round(w * dpr)) {
            ac.width = Math.round(w * dpr);
            ac.height = Math.round(h * dpr);
        }
        ax.setTransform(dpr, 0, 0, dpr, 0, 0);
        ax.clearRect(0, 0, w, h);
        const a = Math.min(1, Math.max(0, (reveal - .75) / .25)),
            o = L[0];
        if (a <= 0 || o.sx == null) return;
        L.forEach((p, i) => {
            if (p === o || p.sx == null) return;
            const d = Math.hypot(p.sx - o.sx, p.sy - o.sy),
                mx = (o.sx + p.sx) / 2,
                my = (o.sy + p.sy) / 2 - d * .45,
                e = !cur || cur === o || cur === p ? 1 : .3;
            const g = ax.createLinearGradient(o.sx, o.sy, p.sx, p.sy);
            g.addColorStop(0, 'rgba(140,116,21,1)');
            g.addColorStop(1, 'rgba(185,152,47,.7)');
            ax.globalAlpha = a * e * .28;
            ax.strokeStyle = g;
            ax.lineWidth = cur === p ? 5 : 3.5;
            ax.setLineDash([]);
            ax.beginPath();
            ax.moveTo(o.sx, o.sy);
            ax.quadraticCurveTo(mx, my, p.sx, p.sy);
            ax.stroke();
            ax.globalAlpha = a * e;
            ax.lineWidth = cur === p ? 2.8 : 2;
            ax.setLineDash([7, 8]);
            ax.lineDashOffset = rm ? 0 : -ts / 40;
            ax.stroke();
            if (!rm) {
                const t = (ts / 2800 + i * .19) % 1,
                    u = 1 - t,
                    X = u * u * o.sx + 2 * u * t * mx + t * t * p.sx,
                    Y = u * u * o.sy + 2 * u * t * my + t * t * p.sy;
                ax.setLineDash([]);
                ax.shadowColor = 'rgba(207,181,78,.9)';
                ax.shadowBlur = 12;
                ax.fillStyle = '#E9D67F';
                ax.beginPath();
                ax.arc(X, Y, cur === p ? 3.6 : 2.6, 0, 6.2832);
                ax.fill();
                ax.shadowBlur = 0;
            }
        });
        ax.globalAlpha = 1;
    };
    const frame = ts => {
        if (!vis) return;
        if (reveal < 1) {
            t0 = t0 || ts;
            reveal = Math.min(1, (ts - t0) / 2400);
            dirty = true;
        }
        const want = cur ? 1 : 0;
        if (Math.abs(want - glow) > .003) {
            glow += (want - glow) * .12;
            dirty = true;
        }
        if (dirty) {
            draw();
            dirty = false;
        }
        pinPos();
        drawArcs(ts);
        if (cur) place();
        requestAnimationFrame(frame);
    };
    new IntersectionObserver(([e]) => {
        vis = e.isIntersecting;
        if (!vis) return;
        sec.classList.add('in');
        requestAnimationFrame(frame);
        if (!started) {
            started = true;
            if (!mob() && !rm) setTimeout(() => {
                if (!cur) open(L[0]);
            }, 3200);
        }
    }, {
        threshold: .2
    }).observe(sec);
    const center = () => {
        if (st.scrollWidth > st.clientWidth) st.scrollLeft = (st.scrollWidth - st.clientWidth) / 2;
    };
    let moved = false;
    ['pointerdown', 'wheel', 'keydown'].forEach(ev => st.addEventListener(ev, () => {
        moved = true;
        hint.classList.add('off');
    }, {
        passive: true
    }));
    addEventListener('resize', () => {
        dirty = true;
        if (!moved) center();
        pinPos();
        place();
    });
    center();
    pinPos();
})();