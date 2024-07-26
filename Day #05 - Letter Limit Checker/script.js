var metaTitleLimit = 55;
var metaDescriptionLimit = 160;
var googlePostLimit = 300;
var instagramLimit = 2200;
var twitterPostLimit = 280;
var twitterUsernameLimit = 20;
var facebookWallTruncationLimit = 477;
var facebookWallAllLimit = 63206;
var facebookCommentLimit = 8000;
var facebookPageDescriptionLimit = 255;
var facebookUsernameLimit = 50;
var facebookMessengerLimit = 20000;
var youtubeVideoTitleLimit = 70;
var youtubeVideoDescriptionLimit = 5000;
var snapchatCaptionLimit = 250;
var pinterestPinDescriptionLimit = 500;

function count() {
var text = document.getElementById('inputText').value;

// Count letters and numbers
var letterCount = text.replace(/[^a-z0-9]/gi, '').length;
document.getElementById('letterCount').textContent = letterCount;


// Count words
var wordCount = text.trim().split(/\s+/).length;
document.getElementById('wordCount').textContent = wordCount;

// Count sentences
var sentenceCount = text.split(/[.|!|?]+/).length - 1;
document.getElementById('sentenceCount').textContent = sentenceCount;

// Update status


function updateStatus(statusId, statusText, isPass) {
       var statusElement = document.getElementById(statusId);
       statusElement.textContent = statusText;
       statusElement.classList.toggle('status-pass', isPass);
       statusElement.classList.toggle('status-fail', !isPass);
    }
    updateStatus('metaTitleStatus', (letterCount <= metaTitleLimit) ? 'Pass' : 'Fail', letterCount <= metaTitleLimit);
    updateStatus('metaDescriptionStatus', (letterCount <= metaDescriptionLimit) ? 'Pass' : 'Fail', letterCount <= metaDescriptionLimit);
    updateStatus('googlePostStatus', (wordCount >= googlePostLimit) ? 'Pass' : 'Fail', wordCount >= googlePostLimit);
    updateStatus('instagramStatus', (letterCount <= instagramLimit) ? 'Pass' : 'Fail', letterCount <= instagramLimit);
    updateStatus('twitterPostStatus', (letterCount <= twitterPostLimit) ? 'Pass' : 'Fail', letterCount <= twitterPostLimit);
    updateStatus('twitterUsernameStatus', (letterCount <= twitterUsernameLimit) ? 'Pass' : 'Fail', letterCount <= twitterUsernameLimit);
    updateStatus('facebookWallTruncationStatus', (letterCount <= facebookWallTruncationLimit) ? 'Pass' : 'Fail', letterCount <= facebookWallTruncationLimit);
    updateStatus('facebookWallAllStatus', (letterCount <= facebookWallAllLimit) ? 'Pass' : 'Fail', letterCount <= facebookWallAllLimit);
    updateStatus('facebookCommentStatus', (letterCount <= facebookCommentLimit) ? 'Pass' : 'Fail', letterCount <= facebookCommentLimit);
    updateStatus('facebookPageDescriptionStatus', (letterCount <= facebookPageDescriptionLimit) ? 'Pass' : 'Fail', letterCount <= facebookPageDescriptionLimit);
    updateStatus('facebookUsernameStatus', (letterCount <= facebookUsernameLimit) ? 'Pass' : 'Fail', letterCount <= facebookUsernameLimit);
    updateStatus('facebookMessengerStatus', (letterCount <= facebookMessengerLimit) ? 'Pass' : 'Fail', letterCount <= facebookMessengerLimit);
    updateStatus('youtubeVideoTitleStatus', (letterCount <= youtubeVideoTitleLimit) ? 'Pass' : 'Fail', letterCount <= youtubeVideoTitleLimit);
    updateStatus('youtubeVideoDescriptionStatus', (letterCount <= youtubeVideoDescriptionLimit) ? 'Pass' : 'Fail', letterCount <= youtubeVideoDescriptionLimit);
    updateStatus('snapchatCaptionStatus', (letterCount <= snapchatCaptionLimit) ? 'Pass' : 'Fail', letterCount <= snapchatCaptionLimit);
    updateStatus('pinterestPinDescriptionStatus', (letterCount <= pinterestPinDescriptionLimit) ? 'Pass' : 'Fail', letterCount <= pinterestPinDescriptionLimit);


}

