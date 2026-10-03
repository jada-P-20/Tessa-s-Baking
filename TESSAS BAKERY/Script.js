/* =========================================
   MOBILE NAVIGATION
   ========================================= */

function toggleMenu() {

    const navigation =
        document.getElementById("navigation");

    navigation.classList.toggle("open");

}


/* =========================================
   MOBILE PRODUCT DROPDOWN
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const dropdownButton =
        document.querySelector(".dropdown-button");

    const dropdown =
        document.querySelector(".dropdown");


    if (dropdownButton && dropdown) {

        dropdownButton.addEventListener(
            "click",
            function () {

                /*
                 * On mobile, clicking Products
                 * opens and closes the dropdown.
                 */

                if (window.innerWidth <= 700) {

                    dropdown.classList.toggle("open");

                }

            }
        );

    }


    /* =====================================
       CONTACT FORM
       ===================================== */

    const orderForm =
        document.getElementById("orderForm");


    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            function (event) {

                /*
                 * Prevents the page from refreshing.
                 */

                event.preventDefault();


                const formMessage =
                    document.getElementById("formMessage");


                formMessage.textContent =
                    "Thank you! Your enquiry has been received. Tessa will get back to you soon.";


                orderForm.reset();

            }
        );

    }

});
