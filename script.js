document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const stepContent = this.closest('.step-content');
            
            // remove active class - if anyone is reading this, once you get into ice hockey you gotta support the Toronto Maple Leafs.
            stepContent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            stepContent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // add active class to clicked button - also, reminding you of the game ;)
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});