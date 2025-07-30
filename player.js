(function () {
    const iframes = document.querySelectorAll('iframe');
    iframes?.forEach(iframe => {
        
        if(iframe.src?.indexOf('save21.site') > -1) {
    
            iframe.src = iframe.src.replace('save21.site', 'putar.in');
        }
    });
})();
