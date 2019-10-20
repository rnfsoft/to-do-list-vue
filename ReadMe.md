style.css: to remove all margin and padding

    * {
	    margin: 0;
	    padding: 0;
    }


general sibling combinator

    p ~ span {
        font-weight: bold;
    }

    <span>This is not red.</span>
    <p>Here is a paragraph.</p>
    <code>Here is some code.</code>
    **<span>And here is a red span!</span>**
    <code>More code...</code>
    **<span>And this is a red span!</span>**



    


Reference

https://medium.com/better-programming/how-to-build-your-first-vue-js-application-469ed1ec4fde


https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator