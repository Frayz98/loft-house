!function(){"use strict";const e=document.querySelector(".nav-icon-btn"),o=document.querySelector(".nav-icon"),n=document.querySelector(".header__top-row");e.addEventListener("click",(()=>{o.classList.toggle("nav-icon--active"),n.classList.toggle("header__top-row--mobile"),document.body.classList.toggle("no-scroll")})),mask("[data-tel-input]"),document.querySelectorAll("[data-tel-input]").forEach((e=>{e.addEventListener("input",(()=>{"+"===e.value&&(e.value="")})),e.addEventListener("blur",(()=>{"+"===e.value&&(e.value="")}))})),ymaps.ready((function(){var e=new ymaps.Map("map",{center:[59.943543,30.338928],zoom:16}),o=new ymaps.Placemark([59.943543,30.338928],{balloonContent:'\n                <div class="balloon">\n                    <div class="balloon__address">Наб. реки Фонтанки 10-15</div>\n                    <div class="balloon__contacts">\n                        <a href="tel:+78121234567">+8 (812) 123-45-67</a>\n                    </div>\n                </div>\n            '},{iconLayout:"default#image",iconImageHref:"./img/map/location-pin.svg",icon_imagesize:[40,40],iconImageOffset:[-20,-40]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"]),e.geoObjects.add(o),o.balloon.open()}))}();