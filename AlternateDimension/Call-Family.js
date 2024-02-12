                    // what to take weapon store
                    if (choice === 'weapon store') {
                        document.body.innerHTML += '<h2>What will you take?</h2>';
                        var weaponChoices = ['knife', 'grenade', 'gun'];
                        weaponChoices.forEach(function(weaponChoice) {
                            var weaponButton = document.createElement('button');
                            weaponButton.innerHTML = weaponChoice;
                            weaponButton.addEventListener('click', function() {
                                inventory.push(weaponChoice); // Add the chosen item to the inventory
                                document.body.innerHTML += '<p>You chose to take: ' + weaponChoice + '</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                // Ask if the player wants to take anything else in the weapon store
                                var takeAnythingElseButton = document.createElement('button');
                                takeAnythingElseButton.innerHTML = 'Take anything else?';
                                takeAnythingElseButton.addEventListener('click', function() {
                                    document.body.innerHTML = ''; // Clear the screen
                                    document.body.innerHTML += '<h2>What else will you take?</h2>';

                                    var additionalChoices = ['scope', 'munitions', 'cleaning kit', 'Poster'];
                                    additionalChoices.forEach(function(additionalChoice) {
                                        var additionalButton = document.createElement('button');
                                        additionalButton.innerHTML = additionalChoice;
                                        additionalButton.addEventListener('click', function() {
                                            inventory.push(additionalChoice); // Add the chosen item to the inventory
                                            document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                        });
                                        
                                        document.body.appendChild(additionalButton);
                                        
                                    });
                                    

                                
                                });
                                document.body.appendChild(takeAnythingElseButton);
                            //return button should be here
                            
                            });
                            
                            document.body.appendChild(weaponButton);
                            
                        });
                    }


                    
                    if (choice === 'drug store') {
                        document.body.innerHTML += '<h2>What will you take?</h2>';
                        var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                        drugChoices.forEach(function(drugChoice) {
                            var drugButton = document.createElement('button');
                            drugButton.innerHTML = drugChoice;
                            drugButton.addEventListener('click', function() {
                                inventory.push(drugChoice); // Add the chosen item to the inventory
                                document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                // Ask if the player wants to take anything else in the drug store
                                var takeAnythingElseButton = document.createElement('button');
                                takeAnythingElseButton.innerHTML = 'Take anything else?';
                                takeAnythingElseButton.addEventListener('click', function() {
                                    document.body.innerHTML = ''; // Clear the screen
                                    document.body.innerHTML += '<h2>What else will you take?</h2>';

                                    var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                    additionalChoices.forEach(function(additionalChoice) {
                                        var additionalButton = document.createElement('button');
                                        additionalButton.innerHTML = additionalChoice;
                                        additionalButton.addEventListener('click', function() {
                                            inventory.push(additionalChoice); // Add the chosen item to the inventory
                                            document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                            
                                        });
                                        document.body.appendChild(additionalButton);
                                        
                                    });
                                    

                                    document.body.appendChild(goSomewhereElseButton);

                                    
                                });
                                document.body.appendChild(takeAnythingElseButton);
                            });
                            document.body.appendChild(drugButton);
                            
                        });
                        
                    }
                    
                    if (choice === 'the white house') {
                        document.body.innerHTML += '<p>You chose to go to the White House...</p>';
                        setTimeout(function() {
                            document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                        }, 3000); // 3 seconds
                    }
                

                    
                });
                
                document.body.appendChild(button);
                
                
                            
                
                
            
            });
           
    });

    
    


    document.getElementById('call').addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>Who will you call?</h1>';
        var choices = ['Joe', 'Mama', 'Freddy', 'Brother'];

        function choice(person) {
            var button = document.createElement('button');
            button.innerHTML = person;
            button.addEventListener('click', function() {
                document.body.innerHTML = '';
                document.body.innerHTML += '<p>You chose to call: ' + person + '</p>';
                if (person === 'Joe') {
                    document.body.innerHTML += '<p>Joe is not available right now. Please leave a message after the beep.</p>';
                }
                if (person === 'Mama') {
                    document.body.innerHTML += '<p>Mama is not available right now. Please leave a message after the beep.</p>';
                }
                if (person === 'Freddy') {
                    document.body.innerHTML += '<p>Freddy is not available right now. Please leave a message after the beep.</p>';
                    // Play sound for Freddy
                    var audio = new Audio('freddy_sound.mp3');
                    audio.play();
                }
                if (person === 'Brother') {
                    document.body.innerHTML += '<p>Brother is not available right now. Please leave a message after the beep.</p>';
                }
            });
            document.body.appendChild(button);
        }

        choices.forEach(function(person) {
            choice(person);
        });
    });
    