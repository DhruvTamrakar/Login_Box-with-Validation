
        //validation check
        const user_name_input = document.getElementById('user-name');
        const user_password_input = document.getElementById('user-password');
        const check_box_input = document.getElementById('age-check');
        const login_button = document.getElementById('login-button');

        document.addEventListener('DOMContentLoaded', function () {
            
            check_box_input.addEventListener('change', function(){
                if (user_name_input.value === "" || user_password_input.value === "" || check_box_input.checked == false) {
                    alert("Username, password, and checkbox are required for further operations.");
                    user_name_input.value = "";
                    user_password_input.value = "";
                    check_box_input.checked = false;
                }else{
                    login_button.disabled = false;
                };
            })
            
        })