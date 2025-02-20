MathJax = {
    loader: {
        load: ['[tex]/mathtools', '[tex]/physics', '[XyJax]/xypic.js'],
        paths: {
            XyJax: 'https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/'
        }
    },
    tex: {
        inlineMath: [['$', '$']],
        displayMath: [['$$', '$$']],
        macros: {
            Aut: ['\\operatorname{Aut}'],
            End: ['\\operatorname{End}'],
            Frac: ['\\operatorname{Frac}'],
            Hom: ['\\operatorname{Hom}'],
            Im: ['\\operatorname{Im}'],
            Ker: ['\\operatorname{Ker}'],
            Re: ['\\operatorname{Re}'],
            Res: ['\\operatorname*{Res}'],
            Span: ['\\operatorname{Span}'],
            and: ['\\ \\text{ and }\\,'],
            bar: ['\\overline'],
            bm: ['\\boldsymbol'],
            coht: ['\\operatorname{coht}'],
            defiff: ['\\stackrel{\\text{def}}\\iff'],
            dcap: ['\\displaystyle\\bigcap'],
            dcup: ['\\displaystyle\\bigcup'],
            dinf: ['\\displaystyle\\inf'],
            dint: ['\\displaystyle\\int'],
            dlim: ['\\displaystyle\\lim'],
            dmax: ['\\displaystyle\\max'],
            dmin: ['\\displaystyle\\min'],
            dprod: ['\\displaystyle\\prod'],
            dsum: ['\\displaystyle\\sum'],
            dsup: ['\\displaystyle\\sup'],
            ht: ['\\operatorname{ht}'],
            id: ['\\operatorname{id}'],
            nparal: ['\\mathrel{\\rotatebox[origin=c]{-25}{$\\parallel$}\\!\\!\\!\\!\\backslash\\,}'],
            or: ['\\ \\text{ or }\\,'],
            ord: ['\\operatorname{ord}'],
            paral: ['\\mathrel{\\rotatebox[origin=c]{-25}{$\\parallel$}}'],
            sgn: ['\\operatorname{sgn}'],
            suc: ['\\operatorname{suc}'],
            st: ['\\ \\text{ s.t. }\\,'],
            tilde: ['\\widetilde'],
            trdeg: ['\\operatorname{tr.\\!deg}'],
            vec: ['\\overrightarrow'],
        },
        packages: {
            '[+]': ['mathtools', 'physics', 'xypic']
        }
    },
};