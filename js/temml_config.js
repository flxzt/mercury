renderMathInElement(
    document.body,
    {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            // Put $ after $$.
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\begin{equation}", right: "\\end{equation}", display: true },
            { left: "\\begin{align}", right: "\\end{align}", display: true },
            { left: "\\begin{alignat}", right: "\\end{alignat}", display: true },
            { left: "\\begin{gather}", right: "\\end{gather}", display: true },
            { left: "\\begin{CD}", right: "\\end{CD}", display: true },
            { left: "\\begin{multline}", right: "\\end{multline}", display: true },
            { left: "\\[", right: "\\]", display: true }
        ]
    }
);