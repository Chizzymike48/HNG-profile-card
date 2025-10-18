 
   var timeEl = document.getElementById('timeMs');
    function updateTime() {
     timeEl.textContent = Date.now();
    }
    updateTime();
     setInterval(updateTime, 1000);

   var avatarImg = document.getElementById('avatarImg');
    var avatarUrl = document.getElementById('avatarUrl');
    var useUrlBtn = document.getElementById('useUrlBtn');

    useUrlBtn.addEventListener('click', function() {
      var url = avatarUrl.value.trim();
      if (!url) {
         return;
      }
      avatarImg.src = url;
       avatarImg.alt = 'User avatar (from URL)';
    });

    var avatarFile = document.getElementById('avatarFile');
    avatarFile.addEventListener('change', function(event) {
      var file = event.target.files && event.target.files[0];
      if (!file) return; 

      var reader = new FileReader();
      reader.onload = function(e) {
        avatarImg.src = e.target.result;
        avatarImg.alt = 'User avatar (uploaded)';
      };
      reader.readAsDataURL(file);
    });

  
    var bio = document.getElementById('bio');
    var toggle = document.getElementById('toggleBio');
    var bioCollapsed = true; 

    toggle.addEventListener('click', function(){
      if (bioCollapsed) {
         bio.textContent = bio.textContent + ' I focus on clear and testable code that others can read.';
        toggle.textContent = 'Show less';
      } else {
       bio.textContent = 'I build accessible UI using simple HTML, CSS, and JavaScript. I like to keep things clear and testable.';
        toggle.textContent = 'Show more';
      }
      bioCollapsed = !bioCollapsed;
    });

    var required = [
      'test-profile-card','test-user-name','test-user-bio','test-user-time','test-user-avatar','test-user-social-links','test-user-hobbies','test-user-dislikes'
    ];
    required.forEach(function(id){
      if (!document.querySelector('[data-testid="' + id + '"]')) {
        console.warn('Missing data-testid:', id);
      }
    });
