<div align="center">
  <a href="https://chromewebstore.google.com/detail/chatgpt-scroller/pelmadpbepelidfneidllbkmepmdpckd">
      <img src="https://github.com/user-attachments/assets/ab2135ef-f5f4-4408-946a-3423a3dd5b5a" width="128" height="128" alt="ChatGPT Scroller Icon" />
  </a>
  <h1>
    <a href="https://chromewebstore.google.com/detail/chatgpt-scroller/pelmadpbepelidfneidllbkmepmdpckd">
      ChatGPT Scroller
    </a>
  </h1>
  <div>A chrome extension to make navigating ChatGPT conversations easier</div>
  <br />
  
  <img src="https://github.com/user-attachments/assets/947509b5-e2b2-4eb3-a7d9-4555e3903fa6" />
</div>

#### Table of Contents

* [Add extension](#add-extension)
* [Run extension from repository](#run-extension-from-repository)
* [Local development](#local-development)

----

# Add extension

Click on this [link](https://chromewebstore.google.com/detail/chatgpt-scroller/pelmadpbepelidfneidllbkmepmdpckd) to add the extension from the Chrome Web Store.

----

# Run extension from repository

If you would like to run the extension manually you can follow these instructions:

1. Download and extract [chatgpt-scroller-0.2.0](https://github.com/samimsu/chatgpt-scroller/blob/master/zips/chatgpt-scroller-0.2.0.zip) from zips/chatgpt-scroller-0.2.0.zip or clone this repository.
2. Go to chrome://extensions from your chrome browser address bar
3. Turn on "Developer mode"
4. Click on "Load unpacked"
5. Select the extracted folder or cloned repository from step 1
6. Go to a ChatGPT conversation
7. You should now see the navigation buttons (refresh the page if you don't)
8. Click on the navigation buttons to go to different parts of the conversation

----

# Local development

1. Clone this repository
2. Run `npm install`
3. Run the extension using the same steps from the previous section (load from updated folder instead of zip)
4. Make changes to the code
5. Run `npx webpack` to create the build
6. Click on the refresh button for the extension in chrome://extensions
