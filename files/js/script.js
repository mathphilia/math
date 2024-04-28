onload = function()  {
    let thisPage = location.pathname.replace(/\/$/, '').split('/').at(-1);
    let pageIndex = pages.pageName.indexOf(thisPage);
    if(pageIndex < 0){
        pageIndex = undefined;
    }

    Array(...document.getElementsByClassName('prev')).forEach(elem => {
        let prevPageName = pages.pageName[pageIndex - 1];
        let prevPageTitle = pages.pageTitle[pageIndex - 1];
        if(prevPageName === undefined){
            return;
        }
        elem.href = '../' + prevPageName;
        let thumbnail = new Image();
        thumbnail.alt = prevPageTitle;
        thumbnail.src = `../thumbnail/${prevPageName}.png`;
        elem.appendChild(thumbnail);
        let titleSpan = document.createElement('span');
        titleSpan.innerText = prevPageTitle;
        elem.appendChild(titleSpan);
    });

    Array(...document.getElementsByClassName('next')).forEach(elem => {
        let nextPageName = pages.pageName[pageIndex + 1];
        let nextPageTitle = pages.pageTitle[pageIndex + 1];
        if(nextPageName === undefined){
            return;
        }
        elem.href = '../' + nextPageName;
        let thumbnail = new Image();
        thumbnail.alt = nextPageTitle;
        thumbnail.src = `../thumbnail/${nextPageName}.png`;
        elem.appendChild(thumbnail);
        let titleSpan = document.createElement('span');
        titleSpan.innerText = nextPageTitle;
        elem.appendChild(titleSpan);
    });

    let articles = document.getElementById('article-list');
    if(articles){
        for(let i = 0; i < pages.pageName.length; i++){
            let articleA = document.createElement('a');
            articleA.href = pages.pageName[i];
            let thumbnail = new Image();
            thumbnail.alt = pages.pageTitle[i];
            thumbnail.src = `thumbnail/${pages.pageName[i]}.png`;
            articleA.appendChild(thumbnail);
            let titleSpan = document.createElement('span');
            titleSpan.innerText = pages.pageTitle[i];
            articleA.appendChild(titleSpan);
            articles.appendChild(articleA);
        }
    }

    Array(...document.getElementsByTagName('h2')).forEach(elem => {
        let img = new Image();
        img.className = 'copy';
        elem.appendChild(img);
    });

    Array(...document.getElementsByTagName('h3')).forEach(elem => {
        let img = new Image();
        img.className = 'copy';
        elem.appendChild(img);
        let listed = document.createElement('li');
        listed.appendChild(document.createElement('a'));
        listed.children[0].innerText = elem.innerText;
        listed.children[0].href = '#' + elem.id;
        document.getElementById('h3-list').appendChild(listed);
    });

    Array(...document.getElementsByClassName('copy')).forEach((elem, index) => {
        elem.alt = 'copy';
        elem.src = '/math/files/images/copy.png';
        elem.title = 'copy URL';
        if('ontouchend' in document){
            elem.style.visibility = 'visible';
        }
        let parent = elem.parentElement
        elem.onclick = function() {
            navigator.clipboard.writeText(location.origin + location.pathname + (index ? '#' : '') + parent.id);
            elem.src = '/math/files/images/copied.png';
            setTimeout(() => {
                elem.src = '/math/files/images/copy.png';
            }, 3000);
        };
    });
};