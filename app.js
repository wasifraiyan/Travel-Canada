 
            //sidenav
            var sideNav = document.querySelector('.sidenav');
            M.Sidenav.init(sideNav, {});
        
            
            //slider
            const slider = document.querySelector('.slider');
            M.Slider.init(slider, {
                indicators: false,
                height: 600,
                transition: 500,
                   
            })
            
            // autocomplete
            const ac = document.querySelector('.autocomplete');
            M.Autocomplete.init(ac, {
                data: {
                    "Alberta":null,
                    "CN Tower":null,
                    "Niagara Falls":null,
                    "Nova Scotia ":null,
                    "Quebec":null,
                    "Science World": null,
                    "Toronto":null,  
                }
            });