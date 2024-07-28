document.getElementById('language-select').addEventListener('change', function() {
    var selectedLanguage = this.value;
    var currentURL = window.location.href;
    
    document.cookie = "lang=" + selectedLanguage + "; path=/";
    
    window.location.reload();
});
