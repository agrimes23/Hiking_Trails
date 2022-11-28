<h1>Hiking Trails List</h1>
<p>This app has lists of hiking trails that people can add to their favorites and then edit their favorites if they'd like. </p>

<h3>MongoDB Structure</h3>
<p>There are two collections within the hiking trails mongo database, trailinfo and favorites. One collection alone does not do all 7 restful routes, but combined there are at least 7 every route. The trailinfos collection can add new, show each db item on index and separately on the show pages. The favorites collection can have trails from trailinfo added to favorites, also has a show page, and you can edit and update (only in favorites) as well as remove items from your favorite list (only in favorites) </p>

<h3>EJS Files</h3>
<p>For the main trails section, I have trails_index, trails_new, and trails_show page.</p>

<p>For the favorites section of the website, I have favorites_index, favorites_show, and favorites_edit. </p>

<h3>Special Features</h3>
<p>I added the bootstrap carousel just to see how to code one. I think there are some changes between versions so it might look a little strange. I intentionally took the arrows on both sides off, since I don't want the user bothering with the carousel.</p>

<p>My favorite feature is the star ratings. On the new trails page and the edit favorite trails page are where you can click on which star rating you want. The five star icons are grayed out at first, but when you hover over them they light up. When you click on the rating you want to give, it will record the index number and actually have the amount you clicked on lit up. I used vanilla js for this instead of jQuery.</p>

<p>I also included google maps by embedding the iframe code in to my show page. There's a link on the google maps site that has the code ready to put in your code.</p>

<h3>Things I struggled with</h3>
<li>
<p>
I tried incorporating jQuery into my code. I learned how to do it but never successfully used it. I wrote vanilla js instead to make the stars work. But it should be quick to rewrite the vanilla js code to jQuery since they are very similar.
</p>
</li>
<li>
<p>
I couldn't find a way to successfully use mongo relationships. I think I was very close to complete it, but I ran out of time.
</p>
</li>
<li>
<p>
I would like to try to use the google maps API. I saw that option when I was looking into the embedded google maps, but did not look into it too much.
</p>
</li>
