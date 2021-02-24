var fname, lname, address, pwd, pc, city, provstate, number, email, country,cardno,month;
		function validatefname() {
            var patt1 = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)?$/;
            var fname = document.getElementById("fname").value;
            if (patt1.test(fname) == true) {
                alert("firstname added");
            }
            else{
                alert("Enter one or two words with first letter capital,\n(Steve Jobs)");
                document.getElementById("fname").value="";
				document.getElementById("fname").focus();
				return false;

            }
            return (true);


        }


        function validateemail() {
			var patt8 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			var email = document.getElementById("email").value;
			if (patt8.test(email) == true) {
				
                alert("email added");
			}
			else {
				alert("Follow this format: example@mail.com");
				document.getElementById("email").focus();
				return false;
			}
			return (true);
        }
        
        function validateadddress() {
			var patt3 = /^[\d]{4}?(-|.|\s)([a-zA-Z]+(.|-|\s))?([A-Z][a-z](-|.|\s))?[A-Z][a-z]/;
			var address = document.getElementById("adr").value;
			if (patt3.test(address) == true) {
				
                alert("address added");
			}
			else {
				alert("Follow this format: 2364 rue Example");
				document.getElementById("adr").focus();
				return false;
			}
			return (true);
        }
        
        function validatecity() {
			var patt4 = /^([A-Z][a-z]{2,})((\s[A-Z][a-z]{1,})?)$/;
			var city = document.getElementById("city").value;
			if (patt4.test(city) == true) {
			
                alert("city added");
			}
			else {
				alert("Enter one or two words with first letter capital,\n(Montreal or New York)");
				document.getElementById("city").focus();
				return (true);
			}
			return (true);
        }
        

        function validatepr() {
			var patt5 = /[A-Z][a-z]/;
			var provstate = document.getElementById("state").value;
			if (patt5.test(provstate) == true) {
			
              
                alert("province added");
			}
			else {
				alert("Follow this format: Quebec");
				document.getElementById("state").focus();
				return false;
			}
			return (true);
        }
        


        function validatepc() {
			var patt6 = /^([A-Z][\d][A-Z])(\s|-)?([\d][A-Z][\d])$/;
			var pc = document.getElementById("zip").value;
			if (patt6.test(pc) == true) {
			
                alert("postalcode added");
			}
			else {
				alert("Follw this format: A#A#A#");
				document.getElementById("zip").focus();
				return false;
			}
			return (true);
        }


        function validateCardName() {
            var patt1 = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)?$/;
            var fname = document.getElementById("cname").value;
            if (patt1.test(fname) == true) {
                alert("firstname added");
            }
            else{
                alert("Enter one or two words with first letter capital,\n(Steve Jobs)");
                document.getElementById("cname").value="";
				document.getElementById("cname").focus();
				return false;

            }
            return (true);


        }
        

        function validateCardno()  {
          
            var patt7 = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
            var cardno = document.getElementById("ccnum").value;
            if(patt7.test(cardno) == true ){
                alert("Card number added")
            }
            else {
                alert("Follow this format: 1111-2222-3333-4444");
                document.getElementById("ccnum").value="";
				document.getElementById("ccnum").focus();
				return false;
			}
			return (true);
        } 

        function validateMonth()  {

            var patt8 =/^(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)$/;
            var month = document.getElementById('expmonth').value;
            if(patt8.test(month) == true ){
                alert("Exp month added");
            }
            else{
                alert("Follow this format: September ");
                document.getElementById("expmonth").value = "";
                document.getElementById("expmonth").focus();
                return false;

            }
            return(true);

        }

        function validateCVV(){
            var patt9 = /^[0-9]{3,4}$/;
            var cvv = document.getElementById('cvv').value;
            if(patt9.test(cvv) == true ){
                alert("Cvv added");
            }
            else{
                alert("Follow this format:123");
                document.getElementById('cvv').value ="";
                document.getElementById('cvv').focus();
            }
            
        }



function thankyou(){
    alert("Thanks for shopping with Ressurection!. You will be remembered!")
}













