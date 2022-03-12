import '/styles/alisayed_jk.scss';
// Buttons scrips
var name1 = document.getElementById("name");
			var mail1 = document.getElementById("mail");
			var message1 = document.getElementById("message");
			var submit1 = document.getElementById("submit-message");
			var stname1 = localStorage.getItem("setname");
			var stmail1 = localStorage.getItem("setmail");
			var reset1 = document.getElementById("reset-message");
			if(stname1) {
				name1.value = stname1;
			}
			if(stmail1) {
				mail1.value = stmail1;
			}
			submit1.addEventListener("click", function(event) {
				if(!(name1.value && mail1.value)) {
					event.preventDefault();
					if(!(name1.value)) {
						if(!(name1.classList.contains("error"))) {
							name1.classList.add("error");
						}
					}
					if(name1.value) {
						name1.classList.remove("error");
					}
					if(!(mail1.value)) {
						if(!(mail1.classList.contains("error"))) {
							mail1.classList.add("error");
						}
					}
					if(mail1.value) {
						mail1.classList.remove("error");
					}
				}
				else {
					localStorage.setItem("setname", name1.value);
					localStorage.setItem("setmail", mail1.value);
				}
			});
			reset1.addEventListener("click", function(event) {
				mail1.classList.remove("error");
				name1.classList.remove("error");
			});