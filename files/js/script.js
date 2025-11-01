document.addEventListener('DOMContentLoaded', () => {
    let thisPage = location.pathname.replace(/\/$/, '').split('/').at(-1);
    let pageIndex = pages.pageName.indexOf(thisPage);
    if(pageIndex < 0) {
        pageIndex = undefined;
    }

    Array.from(document.getElementsByClassName('prev')).forEach(elem => {
        let prevPageName = pages.pageName[pageIndex - 1];
        let prevPageTitle = pages.pageTitle[pageIndex - 1];
        if(prevPageName === undefined) {
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

    Array.from(document.getElementsByClassName('next')).forEach(elem => {
        let nextPageName = pages.pageName[pageIndex + 1];
        let nextPageTitle = pages.pageTitle[pageIndex + 1];
        if(nextPageName === undefined) {
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

    let articles = Array.from(document.getElementsByClassName('article-list'));
    pageIndex = -1;
    for(let i = 0; i < articles.length; i++) {
        let sectionLength;
        if(pages.sections === undefined) {
            sectionLength = pages.pageName.length;
        } else {
            sectionLength = pages.sections[i];
        }
        for(let j = 0; j < sectionLength; j++) {
            pageIndex++;
            let articleA = document.createElement('a');
            articleA.href = pages.pageName[pageIndex];
            let thumbnail = new Image();
            thumbnail.alt = pages.pageTitle[pageIndex];
            thumbnail.src = `thumbnail/${pages.pageName[pageIndex]}.png`;
            articleA.appendChild(thumbnail);
            let titleSpan = document.createElement('span');
            titleSpan.innerText = pages.pageTitle[pageIndex];
            articleA.appendChild(titleSpan);
            articles[i].appendChild(articleA);
        }
    }

    Array.from(document.getElementsByTagName('h2')).forEach(elem => {
        let img = new Image();
        img.className = 'copy';
        elem.appendChild(img);
    });

    Array.from(document.getElementsByTagName('h3')).forEach(elem => {
        let img = new Image();
        img.className = 'copy';
        elem.appendChild(img);
        let listed = document.createElement('li');
        listed.appendChild(document.createElement('a'));
        listed.children[0].innerText = elem.innerText;
        listed.children[0].href = '#' + elem.id;
        document.getElementById('h3-list').appendChild(listed);
    });

    Array.from(document.getElementsByClassName('title')).forEach(elem => {
        let img = new Image();
        img.className = 'copy';
        elem.appendChild(img);
    });

    Array.from(document.getElementsByClassName('copy')).forEach((elem, index) => {
        elem.alt = 'copy';
        elem.src = '/math/files/images/copy.png';
        elem.title = 'copy URL';
        if('ontouchend' in document) {
            elem.style.visibility = 'visible';
        }
        let parent = elem.parentElement;
        let parentId = parent.className == 'title' ? parent.parentElement.id : parent.id;
        parentId = (parentId ? '#' : '') + parentId;
        elem.onclick = function() {
            navigator.clipboard.writeText(location.origin + location.pathname + parentId);
            elem.src = '/math/files/images/copied.png';
            setTimeout(() => {
                elem.src = '/math/files/images/copy.png';
            }, 3000);
        };
    });

    Array.from(document.getElementsByTagName('a')).forEach(elem => {
        if(!elem.host || elem.host == location.host) {
            return;
        }
        elem.target = '_blank';
        elem.rel = 'noopener noreferrer';
    });
});