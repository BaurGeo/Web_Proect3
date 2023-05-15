let article = 
`<section class="firstContent">
    <div class="firstContentText">
        <div class="fcIntroduse">
            <div class="fcIntAva" >
                <img src="./assets/Xi_Jinping_2019.jpg" alt="authorPhoto_img"/>
            </div>
            <div class="fcIntHead">
                <h5 id="author"></h5>
                <h5 class="opacity">in</h5>
                <h5 id="topic"></h5>
                <h5  class="opacity" id="date"></h5>
            </div> 
        </div>
        <div>
            <a href="Project3_page2.html"> <h1 class="fcTitle" id="title"></h1> </a> 
        </div>
        <div class="fcCont">
            <p id="summary"></p>
        </div>
        <div class="fcLastLine">
            <div class="fcLastLine1">
                <div class="fcLastLineButton">
                    <button class="fcLastLineButt>
                        <p>Read more</p>
                    </button>
                </div>
                <div>
                    <p class="opacity" id="readingTime">10 min read</p>
                </div>
                <div>
                    <p> · </p>
                </div>
                <div>
                    <p class="opacity">Selected for you</p>
                </div>
            </div>
            <div class="fcLastLineGB">
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
        </div>
    </div>
    <div class="firstContentImg">
        <img class="fCI" src="" alt="article_img"/>
    </div>
</section>`;

const articles =document.getElementById("articles");

async function fetchData() {
    try {
        const response = await fetch ('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=QkC0DyRG3Kn4NbfQHtgRIjYazOG55LXY');
        const data = await response.json();
        console.log(data.results);

        data.results.forEach((item) => {
            let newArticle = article.replace('id="author">',`id="author">${item.byline}`);
            newArticle = newArticle.replace('id="topic">', `id="topic">${item.section}`);
            newArticle = newArticle.replace('id="date">', `id="date">${item.published_date.substring(0,10)}`);
            newArticle = newArticle.replace('id="title">', `id="title">${item.title}`);
            newArticle = newArticle.replace('id="summary">', `id="summary">${item.abstract}`);
            newArticle = newArticle.replace('src=""', `src="${item.multimedia[0].url}"`);
            
        
        
            articles.innerHTML += newArticle;
        });

    } catch (error) {
        console.log(error);
    }
}

fetchData();