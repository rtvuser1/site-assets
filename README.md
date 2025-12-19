# site-assets
This is a collection of global website assets that are accessible publicly.
They are useful in many websites. 
The assets are published to the web using github pages.

To access an asset such as the amz-affiliate style sheet, add the following line to the html page:
```
<link rel="stylesheet" href="https://rtvuser1.github.io/site-assets/amz-affiliate-styles.css">
```
To access and use a pre-configured Amazon "product card" (with an image), add this line:
```
<script defer src="https://rtvuser1.github.io/site-assets/amz-cards.js"></script>
```

## Example of custom HTML used in GoDaddy Website

Here is one of the best books I've read with great recipes and healthy meal ideas: <a href="https://amzn.to/48LqUW0" target="_blank" rel="noopener">
  The Well Plated Cookbook: Fast, Healthy Recipes You'll Want to Eat
</a>
<P>
Another version of exactly the same thing, but with full link (not sure what is the advantage of the full link): 
<p>
&nbsp;&nbsp;
<a href="https://www.amazon.com/Well-Plated-Cookbook-Healthy-Recipes/dp/0525541160?crid=1NDIXI8QDQ5IG&dib=eyJ2IjoiMSJ9.4lHB3y9-htMhH9z2Lj-XhJUVn6jPacJGvHpddIa1G61b8HW9u6Skxh3CvgGP1cZ6UPHG1S5tF1qlR3u51A3CJA0Q8j5K9QurHKUkWpes0GA9uLeVba_eGTCMxhrFBC5OtD_uCa_T81aDjiTWZ5_73LcdepRkMcPMzi9ystkEu0G1r-s6u_dSLYOgdHv7Se2f9agRTjivG1h0H__QoheNXKPoMubiKGKkjwWi921UbtY.r8aQEC-BllgdMfIvyeniY9E5psjdIBtISHySR7pdCNQ&dib_tag=se&keywords=healthy+tasty+recipe+books&qid=1765989910&sprefix=healthy+tasty+recipe+books%2Caps%2C163&sr=8-3&linkCode=ll1&tag=tt08c0-20&linkId=072f1423e8f3e35e1856298056fe4c5b&language=en_US&ref_=as_li_ss_tl " target="_blank" rel="noopener">
  The Well Plated Cookbook: Fast, Healthy Recipes You'll Want to Eat (Again)
</a>

<P style="margin-top:2rem;">

<!-- Amazon Product Callout (No Image Version) -->

Here's a better example that uses a "product card" with basic styling effects:

<link rel="stylesheet" href="https://rtvuser1.github.io/site-assets/amz-affiliate-styles.css">

<div class="amz-callout">
  <div class="amz-badge">Recommended Cookbook</div>

  <h3 class="amz-title">
    The Well Plated Cookbook: Healthy Recipes You'll Actually Want to Eat
  </h3>

  <p class="amz-author">by Erin Clarke</p>

  <p class="amz-summary">
    A practical, feel-good cookbook focused on everyday meals that are lighter,
    comforting, and realistic for busy home cooks.
  </p>

  <ul class="amz-features">
    <li>Approachable, healthy comfort food</li>
    <li>No obscure or expensive ingredients</li>
    <li>Great for weeknight dinners & meal prep</li>
  </ul>

  <div class="amz-cta">
    <a
      href="https://www.amazon.com/Well-Plated-Cookbook-Healthy-Recipes/dp/0525541160?tag=tt08c0-20"
      target="_blank"
      rel="nofollow sponsored"
      class="amz-button"
    >
      Check price & reviews on Amazon
    </a>
    <span class="amz-note">Price & availability updated on Amazon</span>
  </div>
</div>

## Improved version that uses the AMZ Card

NOTE: the AMZ Card will not actually render here in github ... the code is placed here just to see how to make an instance of a card in an actual website HTML page.

```
<link rel="stylesheet" href="https://rtvuser1.github.io/site-assets/amz-affiliate-styles.css">
<script defer src="https://rtvuser1.github.io/site-assets/amz-cards.js"></script>

<!-- Amazon Product Callout (No Image Version) -->

Here's a better example that uses a "product card" with basic styling effects:

<P style="margin-top:1rem;">

<amz-card
  badge="Recommended Cookbook"
  title="The Well Plated Cookbook: Healthy Recipes You'll Actually Want to Eat"
  author="Erin Clarke"
  summary="A practical, feel-good cookbook focused on everyday meals that are lighter, comforting, and realistic for busy home cooks."
  features="Approachable, healthy comfort food|No obscure or expensive ingredients|Great for weeknight dinners & meal prep"
  href="https://www.amazon.com/Well-Plated-Cookbook-Healthy-Recipes/dp/0525541160?tag=tt08c0-20"
  button="Check price & reviews on Amazon"
  note="Price & availability updated on Amazon"
>
</amz-card>
```
Another example that has two cards:
```
<link rel="stylesheet" href="https://rtvuser1.github.io/site-assets/amz-affiliate-styles.css">
<script defer src="https://rtvuser1.github.io/site-assets/amz-cards.js"></script>

<div class="amz-grid">
  <amz-card
    badge="Recommended Cookbook"
    title="The Well Plated Cookbook: Healthy Recipes You'll Actually Want to Eat"
    author="Erin Clarke"
    summary="A practical, feel-good cookbook focused on everyday meals that are lighter, comforting, and realistic for busy home cooks."
    features="Approachable, healthy comfort food|No obscure or expensive ingredients|Great for weeknight dinners & meal prep"
    href="https://www.amazon.com/Well-Plated-Cookbook-Healthy-Recipes/dp/0525541160?tag=tt08c0-20"
    button="Check price & reviews on Amazon"
    note="Price & availability updated on Amazon"
  ></amz-card>

  <amz-card
    badge="Weeknight Favorite"
    title="Salt, Fat, Acid, Heat"
    author="Samin Nosrat"
    summary="A fundamentals-first guide that improves everything you cook."
    features="Teaches technique|Great reference|Beautiful writing"
    href="https://www.amazon.com/..."
    button="Check price & reviews on Amazon"
    note="Price & availability updated on Amazon"
  ></amz-card>

  <!-- add more cards... -->
</div>

```
