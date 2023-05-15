let bigArt = 
`<section class="aboutAuthor">
    <div class="aAdiv1">
        <div class="aAava">
            <img src="./assets/Tokayev_in_Astana.jpg" />
        </div>
        <div class="aAinfo">
            <div class="aAname">
                <p id="author"></p>
            </div>
            <div class="aAotherInf">
                <div>
                    <p id="date"></p>
                </div>
                <div>
                    <p> · </p>
                </div>
                <div>
                    <p>10 min read</p>
                </div>
                <div>
                    <p> · </p>
                </div>
                <div>
                    <p id="topic"></p>
                </div>
            </div>
        </div>
    </div>
    <div class="aAlinks">
        <div>
            <a href="https://www.linkedin.com/feed/"> <img src="./assets/LinkedIn.png"/></a> 
        </div>
        <div>
            <a href="https://www.facebook.com/"> <img src="./assets/Facebook Circled.png"/></a>      
        </div>
        <div>
            <a href="https://twitter.com/"><img src="./assets/Twitter.png"/></a>
        </div>
    </div>
</section>
<section class="bigSection">
    <div>
        <h1 id="title">EARLY TEAM NEWS FOR READING TIE</h1>
    </div>
    <div>
        <p id="summary"></p>
    </div>
    <div>
        <img src="" alt="article_img"/> 
    </div>
    <div class="bsLastLine">
        <div class="bsLLlikes">
            <div>
                <img src="./assets/Heart.png"/>
            </div>
            <div>
                <p>121</p>
            </div>
            <div>
                <img src="./assets/Speech Bubble.png"/>
            </div>
            <div>
                <p>46</p>
            </div>
        </div>
        <div>
            <img src="./assets/Bookmark.png"/>
        </div>
    </div>
</section>`;

const bigArticle =document.getElementById("bigAricle");

async function fetchData() {
    try {
        const response = await fetch ('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=QkC0DyRG3Kn4NbfQHtgRIjYazOG55LXY');
        const data = await response.json();
        console.log(data.results);

        data.results.forEach((item) => {
            let newBigArt = bigArt.replace('id="author">',`id="author">${item.byline}`);
            newBigArt = newBigArt.replace('id="topic">', `id="topic">${item.section}`);
            newBigArt = newBigArt.replace('id="date">', `id="date">${item.published_date}`);
            newBigArt = newBigArt.replace('id="title">', `id="title">${item.title}`);
            newBigArt = newBigArt.replace('id="summary">', `id="summary">${item.abstract}`);
            newBigArt = newBigArt.replace('src=""', `src="${item.multimedia[0].url}"`);
        
            bigArticle.innerHTML += newBigArt;
        });

    } catch (error) {
        console.log(error);
    }
}

fetchData();