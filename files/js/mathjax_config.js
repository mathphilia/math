MathJax = {
    loader: {
        load: ['[tex]/mathtools', '[tex]/physics']
    },
    tex: {
        inlineMath: [['$', '$']],
        displayMath: [['$$', '$$']],
        macros: {
            Aut: ['\\operatorname{Aut}'],
            Ker: ['\\operatorname{Ker}'],
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
            res: ['\\operatorname*{Res}'],
            sgn: ['\\operatorname{sgn}'],
            suc: ['\\operatorname{suc}'],
            st: ['\\ \\text{ s.t. }\\,'],
            vec: ['\\overrightarrow'],
        },
        packages: {
            '[+]': ['mathtools', 'physics']
        }
    },
};