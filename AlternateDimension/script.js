window.onload = function () {
    var inventory = []; // Declare and initialize the inventory array

    var startTime = Date.now(); // Get the current time
    var duration = 30 * 1000; // 30 seconds in milliseconds

    function darkenScreen() {
        var currentTime = Date.now(); // Get the current time
        var elapsedTime = currentTime - startTime; // Calculate the elapsed time

        var darkness = Math.min(1, elapsedTime / duration); // Calculate the darkness level (between 0 and 1)

        var red = 10 + Math.round((0 - 10) * darkness); // Calculate the red component
        var green = 13 + Math.round((0 - 13) * darkness); // Calculate the green component
        var blue = 10 + Math.round((0 - 10) * darkness); // Calculate the blue component

        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Set the background color with the darkness level

        if (elapsedTime < duration) {
            requestAnimationFrame(darkenScreen); // Continue darkening the screen
        }

        if (elapsedTime == duration) {
            document.body.innerHTML = '';
            document.body.innerHTML += '<h1>Game Over</h1>';
            document.body.innerHTML += '<p>You ran out of time!</p>';
            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
            // Exit the game button
            const exitButton = document.createElement('button');
            exitButton.textContent = 'Exit Game';
            exitButton.addEventListener('click', function() {
                document.location.reload();
            });
            document.body.appendChild(exitButton);
        }
    }

    darkenScreen(); // Start darkening the screen
    

    document.getElementById('run').addEventListener('click', function () {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>Where will you run?</h1>';
        var choices = ['grocery store', 'weapon store', 'drug store', 'the white house'];

        choices.forEach(function (choice) {
            var button = document.createElement('button');
            button.innerHTML = choice;
            // choice of where to go
            button.addEventListener('click', function () {
                document.body.innerHTML = ''; // Clear the screen
                document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                // choice of what to take
                if (choice === 'grocery store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                    groceryChoices.forEach(function (groceryChoice) {
                        var groceryButton = document.createElement('button');
                        groceryButton.innerHTML = groceryChoice;
                        groceryButton.addEventListener('click', function () {
                            document.body.innerHTML = ''; 
                            inventory.push(groceryChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                            document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen

                            // Ask if the player wants to take anything else in the grocery store
                            var takeAnythingElseButton = document.createElement('button');
                            takeAnythingElseButton.innerHTML = 'Take anything else?';
                            takeAnythingElseButton.addEventListener('click', function () {
                                document.body.innerHTML = ''; // Clear the screen
                                document.body.innerHTML += '<h2>What else will you take?</h2>';

                                var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                additionalChoices.forEach(function (additionalChoice) {
                                    var additionalButton = document.createElement('button');
                                    additionalButton.innerHTML = additionalChoice;
                                    additionalButton.addEventListener('click', function () {
                                        document.body.innerHTML = '';
                                        inventory.push(additionalChoice); // Add the chosen item to the inventory
                                        document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
//Leave  grocery3
                                        var simpleButton = document.createElement('button');
                                        simpleButton.innerHTML = 'Leave store';

                                        simpleButton.addEventListener('click', function() {
                                            document.body.innerHTML = '';
                                            document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                            var choices = ['Gun store', 'drug store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'Gun store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['knife', 'grenade', 'gun'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                        // Ask if the player wants to take anything else in the grocery store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                });
                                                                document.body.appendChild(additionalButton);
                                                            });

                                                            document.body.appendChild(goBackButton);
                                                        });

                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });

                                                    document.body.appendChild(groceryButton);

                                                });

                                            }
                                            if (choice === 'drug store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['painkillers', 'antibiotics', '2 Anti-radiation mask'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        // Ask if the player wants to take anything else in the drug store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['medkit', '2 anti-radiation suit', 'prescription drugs'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML = '';
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                    if (inventory.includes('2 anti-radiation suit') && inventory.includes('2 Anti-radiation mask') && inventory.includes('boite de conserve') && inventory.includes('water')) {
                                                                        setTimeout(function() {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p>As you leave the store, you receive a phone call...</p>';
                                                                            setTimeout (function() {
                                                                            document.body.innerHTML += '<p><b>Joe:</b><j> Hey! I retrieved all of your family, they are safe in the white house bunker! Come if you need</j></p>';
                                                                            
                                                                                var button1 = document.createElement('button');
                                                                                button1.innerHTML = 'Great! I\'ll head to the white house!';
                                                                                button1.addEventListener('click', function() {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p><b>You</b> Great I\'ll head to the white house!</p>';
                                                                                    document.body.innerHTML += '<p><b>Joe:</b><j> See you! </j></p>';
                                                                                    setTimeout(function() {
                                                                                    var newButton = document.createElement('button');
                                                                                    newButton.innerHTML = 'Go to white house';
                                                                                    newButton.addEventListener('click', function() {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>As you go to the white house you enter the bunker...</p>';
                                                                                        document.body.innerHTML += '<p>You get to see your family there, you feel releived.</p>';
                                                                                        setTimeout (function() {
                                                                                        document.body.innerHTML += '<p>A few days passes and you start to feel guilty about not saving your friends and your grilfriend...</p>';
                                                                                        }, 2000);
                                                                                        setTimeout (function() {
                                                                                        document.body.innerHTML += '<p>Your guilt has taken over your mental state, you commited suicide...</p>';
                                                                                        document.body.innerHTML += '<p>Try again.</p>';
                                                                                        }, 4000);
                                                                                    });
                                                                                    document.body.appendChild(newButton);
                                                                                        
                                                                                    }, 2000);
                                                                                });
                                                                                document.body.appendChild(button1);

                                                                                // Button 2
                                                                                var button2 = document.createElement('button');
                                                                                button2.innerHTML = 'Thanks but I stil have somethings to do, we\'ll stay in touch!';
                                                                                button2.addEventListener('click', function() {
                                                                                
                                                                                    document.body.innerHTML ='';
                                                                                    document.body.innerHTML += '<p>Joe: Stay safe!</p>';
                                                                                    setTimeout(function() {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p> As you hang-up you see a car with the keys in it, you decide to take the car.';
                                                                                        document.body.innerHTML += '<h2>Where will you go?</h2>';
                                                                                        var goSomewhereElseButton = document.createElement('button');
                                                                                        goSomewhereElseButton.innerHTML = 'Go to girlfriend\'s house';
                                                                                        goSomewhereElseButton.addEventListener('click', function () {
                                                                                            document.body.innerHTML = '';
                                                                                            document.body.innerHTML += '<p>You chose to go to your girlfriend\'s house.</p>';
                                                                                            document.body.innerHTML += '<p>As you walk to your girlfriend, you see her scared to death....</p>';
                                                                                            document.body.innerHTML += '<p></p>';
                                                                                            document.body.innerHTML += '<p>You take her in your arms...</p>';
                                                                                            document.body.innerHTML += '<p><b>You:</b>Thank god you\'re safe.</p>';
                                                                                            document.body.innerHTML += '<p><b>Girlfirend:</b>Thank you for coming to save me.</p>';
                                                                                            document.body.innerHTML += '<h2>Time is running out, radiation is getting closer and closer... What will you do?</h2>';
                                                                                                var choiceButton1 = document.createElement('button');
                                                                                                choiceButton1.innerHTML = 'Wear anti-radiation suit and mask';
                                                                                                choiceButton1.addEventListener('click', function() {
                                                                                                    document.body.innerHTML ='';
                                                                                                    document.body.innerHTML += '<p>As you both wear your anti-radiation suits and mask you get in the car.</p>';
                                                                                                    //
                                                                                                });
                                                                                                document.body.appendChild(choiceButton1);

                                                                                                var choiceButton2 = document.createElement('button');
                                                                                                choiceButton2.innerHTML = 'Get in the car';
                                                                                                choiceButton2.addEventListener('click', function() {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p>The radiation caught up to you</p>';
                                                                                                    document.body.innerHTML += '<p>Unfortunately you didn\'t have enough time time to run away.</p>';
                                                                                                    document.body.innerHTML += '<p>Try again.</p>';
                                                                                                    // Create Restart Button
                                                                                                    var restartButton = document.createElement('button');
                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                    restartButton.addEventListener('click', function() {
                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                    });

                                                                                                    document.body.appendChild(restartButton);
                                                                                                });
                                                                                                document.body.appendChild(choiceButton2);
                                                                                            
                                                                                        });

                                                                                        var takeAnythingElseButton = document.createElement('button');
                                                                                        takeAnythingElseButton.innerHTML = 'Go to friend\'s house';
                                                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                                                            document.body.innerHTML = '';
                                                                                            document.body.innerHTML += '<p>You chose to go to your friend\'s house.</p>';
                                                                                            setTimeout(function() {
                                                                                                document.body.innerHTML += '<p>You\'re friend is not here, you decide to call him...</p>';
                                                                                                document.body.innerHTML += '<p>He doesn\'t answer </p>';
                                                                                            }, 2000);
                                                                                        });

                                                                                        document.body.appendChild(goSomewhereElseButton);
                                                                                        document.body.appendChild(takeAnythingElseButton);
                                                                                        
                                                                                    }, 2000);
                                                                                
                                                                                });
                                                                                document.body.appendChild(button2);

                                                                                
                                                                            }, 3000);
                                                                        }, 2000);
                                                                    }
                                                                });
                                                                document.body.appendChild(additionalButton);

                                                            });


                                                            document.body.appendChild(goSomewhereElseButton);


                                                        });
                                                        document.body.appendChild(takeAnythingElseButton);
                                                    });
                                                    document.body.appendChild(drugButton);

                                                });

                                            }//
                                            if (choice === 'the white house') {
                                                document.body.innerHTML += '<p>As you walk to the white house...</p>';
                            
                                                var intervalId;
                                                var isBlue = true;
                                                var toggleCount = 0;
                            
                                                function toggleSiren() {
                                                    if (isBlue) {
                                                        document.body.style.backgroundColor = 'red';
                                                        isBlue = false;
                                                    } else {
                                                        document.body.style.backgroundColor = 'blue';
                                                        isBlue = true;
                                                    }
                            
                                                    toggleCount++;
                                                    if (toggleCount === 4) {
                                                        clearInterval(intervalId);
                                                    }
                                                }
                            
                                                intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second
                            
                                                intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds
                                                
                                                setTimeout(function () {
                                                    
                                                    document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                    document.body.style.backgroundColor = 'red';
                                                }, 6000); //7 seconds
                            
                                                setTimeout(function () {
                                                // Exit the game button
                                                const exitButton = document.createElement('button');
                                                exitButton.textContent = 'Exit Game';
                                                exitButton.addEventListener('click', function() {
                                                    document.location.reload();
                                                });
                                                document.body.appendChild(exitButton);
                                                }, 9000); //7 seconds
                            
                                            }
                                        });
                                        document.body.appendChild(button);
                                    });
                                        });

                                        document.body.appendChild(simpleButton);
                                        
                                        

                                    });
                                    
                                    document.body.appendChild(additionalButton);

                                });
// Leave button grocery1
                                var simpleButton = document.createElement('button');
                                simpleButton.innerHTML = 'Leave the store';

                                // Add an event listener to the button
                                simpleButton.addEventListener('click', function () {
                                    // Perform some action when the button is clicked
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['Gun store', 'drug store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'Gun store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['knife', 'grenade', 'gun'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                        // Ask if the player wants to take anything else in the grocery store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                                });
                                                                document.body.appendChild(additionalButton);
                                                            });

                                                            document.body.appendChild(goBackButton);
                                                        });

                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });

                                                    document.body.appendChild(groceryButton);

                                                });

                                            }
                                            if (choice === 'drug store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        // Ask if the player wants to take anything else in the drug store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
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

                                            }//
                                            if (choice === 'the white house') {
                                                document.body.innerHTML += '<p>As you walk to the white house...</p>';
                            
                                                var intervalId;
                                                var isBlue = true;
                                                var toggleCount = 0;
                            
                                                function toggleSiren() {
                                                    if (isBlue) {
                                                        document.body.style.backgroundColor = 'red';
                                                        isBlue = false;
                                                    } else {
                                                        document.body.style.backgroundColor = 'blue';
                                                        isBlue = true;
                                                    }
                            
                                                    toggleCount++;
                                                    if (toggleCount === 4) {
                                                        clearInterval(intervalId);
                                                    }
                                                }
                            
                                                intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second
                            
                                                intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds
                                                
                                                setTimeout(function () {
                                                    
                                                    document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                    document.body.style.backgroundColor = 'red';
                                                }, 6000); //7 seconds
                            
                                                setTimeout(function () {
                                                // Exit the game button
                                                const exitButton = document.createElement('button');
                                                exitButton.textContent = 'Exit Game';
                                                exitButton.addEventListener('click', function() {
                                                    document.location.reload();
                                                });
                                                document.body.appendChild(exitButton);
                                                }, 9000); //7 seconds
                            
                                            }
                                        });
                                        document.body.appendChild(button);
                                    });
                                });

                                // Append the button to the document body
                                document.body.appendChild(simpleButton);
                            });


                            

                            document.body.appendChild(takeAnythingElseButton);
                            
//Leave button grocery 2
                            var simpleButton = document.createElement('button');
                            simpleButton.innerHTML = 'Leave the store';

                            // Add an event listener to the button
                            simpleButton.addEventListener('click', function () {
                                // Perform some action when the button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['Gun store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'Gun store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['knife', 'grenade', 'gun'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                    // Ask if the player wants to take anything else in the grocery store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                            });
                                                            document.body.appendChild(additionalButton);
                                                        });

                                                        document.body.appendChild(goBackButton);
                                                    });

                                                    document.body.appendChild(takeAnythingElseButton);

                                                });

                                                document.body.appendChild(groceryButton);

                                            });

                                        }
                                        if (choice === 'drug store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    // Ask if the player wants to take anything else in the drug store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
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

                                        }//
                                        if (choice === 'the white house') {
                                            document.body.innerHTML += '<p>As you walk to the white house...</p>';
                        
                                            var intervalId;
                                            var isBlue = true;
                                            var toggleCount = 0;
                        
                                            function toggleSiren() {
                                                if (isBlue) {
                                                    document.body.style.backgroundColor = 'red';
                                                    isBlue = false;
                                                } else {
                                                    document.body.style.backgroundColor = 'blue';
                                                    isBlue = true;
                                                }
                        
                                                toggleCount++;
                                                if (toggleCount === 4) {
                                                    clearInterval(intervalId);
                                                }
                                            }
                        
                                            intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second
                        
                                            intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds
                                            
                                            setTimeout(function () {
                                                
                                                document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                document.body.style.backgroundColor = 'red';
                                            }, 6000); //7 seconds
                        
                                            setTimeout(function () {
                                            // Exit the game button
                                            const exitButton = document.createElement('button');
                                            exitButton.textContent = 'Exit Game';
                                            exitButton.addEventListener('click', function() {
                                                document.location.reload();
                                            });
                                            document.body.appendChild(exitButton);
                                            }, 9000); //7 seconds
                        
                                        }
                                    });
                                    document.body.appendChild(button);
                                });
                            });

                            // Append the button to the document body
                            document.body.appendChild(simpleButton);
                        });

                        
                        document.body.appendChild(groceryButton);

                    });
                    
                }

// what to take weapon store--
                if (choice === 'weapon store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var weaponChoices = ['knife', 'grenade', 'gun'];
                    weaponChoices.forEach(function (weaponChoice) {
                        var weaponButton = document.createElement('button');
                        weaponButton.innerHTML = weaponChoice;
                        weaponButton.addEventListener('click', function () {
                            inventory.push(weaponChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + weaponChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                            // Ask if the player wants to take anything else in the weapon store
                            var takeAnythingElseButton = document.createElement('button');
                            takeAnythingElseButton.innerHTML = 'Take anything else?';
                            takeAnythingElseButton.addEventListener('click', function () {
                                document.body.innerHTML = ''; // Clear the screen
                                document.body.innerHTML += '<h2>What else will you take?</h2>';

                                var additionalChoices = ['scope', 'munitions', 'cleaning kit', 'Poster'];
                                additionalChoices.forEach(function (additionalChoice) {
                                    var additionalButton = document.createElement('button');
                                    additionalButton.innerHTML = additionalChoice;
                                    additionalButton.addEventListener('click', function () {
                                        inventory.push(additionalChoice); // Add the chosen item to the inventory
                                        document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    });

                                    document.body.appendChild(additionalButton);
    // Leave button weapon1
                                });
                                var simpleButton = document.createElement('button');
                                simpleButton.innerHTML = 'Leave the store';

                                // Add an event listener to the button
                                simpleButton.addEventListener('click', function () {
                                    // Perform some action when the button is clicked
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['grocery store', 'Gun store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'grocery store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                        // Ask if the player wants to take anything else in the grocery store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
//Leave weapon3 here:
                                                                });
                                                                document.body.appendChild(additionalButton);
                                                            });

                                                            document.body.appendChild(goBackButton);
                                                        });

                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });

                                                    document.body.appendChild(groceryButton);

                                                });

                                            }
                                            if (choice === 'Gun store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['Grenade', 'M6', 'AK47'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        // Ask if the player wants to take anything else in the drug store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['Flashbomb', 'Smokebomb', 'Munitions'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
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

                                            }//
                                            if (choice === 'the white house') {
                                                document.body.innerHTML += '<p>As you walk to the white house...</p>';
                            
                                                var intervalId;
                                                var isBlue = true;
                                                var toggleCount = 0;
                            
                                                function toggleSiren() {
                                                    if (isBlue) {
                                                        document.body.style.backgroundColor = 'red';
                                                        isBlue = false;
                                                    } else {
                                                        document.body.style.backgroundColor = 'blue';
                                                        isBlue = true;
                                                    }
                            
                                                    toggleCount++;
                                                    if (toggleCount === 4) {
                                                        clearInterval(intervalId);
                                                    }
                                                }
                            
                                                intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second
                            
                                                intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds
                                                
                                                setTimeout(function () {
                                                    
                                                    document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                    document.body.style.backgroundColor = 'red';
                                                }, 6000); //7 seconds
                            
                                                setTimeout(function () {
                                                // Exit the game button
                                                const exitButton = document.createElement('button');
                                                exitButton.textContent = 'Exit Game';
                                                exitButton.addEventListener('click', function() {
                                                    document.location.reload();
                                                });
                                                document.body.appendChild(exitButton);
                                                }, 9000); //7 seconds
                            
                                            }
                                            }
                                        );
                                        document.body.appendChild(button);
                                    });
                                });

                                // Append the button to the document body
                                document.body.appendChild(simpleButton);







                            });
                            document.body.appendChild(takeAnythingElseButton);
                            //return button should be here
// Leave button weapon2
                            var simpleButton = document.createElement('button');
                            simpleButton.innerHTML = 'Leave the store';

                            // Add an event listener to the button
                            simpleButton.addEventListener('click', function () {
                                // Perform some action when the button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['grocery store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'grocery store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                    // Ask if the player wants to take anything else in the grocery store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                            });
                                                            document.body.appendChild(additionalButton);
                                                        });

                                                        document.body.appendChild(goBackButton);
                                                    });

                                                    document.body.appendChild(takeAnythingElseButton);

                                                });

                                                document.body.appendChild(groceryButton);

                                            });

                                        }
                                        if (choice === 'drug store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    // Ask if the player wants to take anything else in the drug store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
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

                                        }//
                                        if (choice === 'the white house') {
                                            document.body.innerHTML += '<p>As you walk to the white house...</p>';
                        
                                            var intervalId;
                                            var isBlue = true;
                                            var toggleCount = 0;
                        
                                            function toggleSiren() {
                                                if (isBlue) {
                                                    document.body.style.backgroundColor = 'red';
                                                    isBlue = false;
                                                } else {
                                                    document.body.style.backgroundColor = 'blue';
                                                    isBlue = true;
                                                }
                        
                                                toggleCount++;
                                                if (toggleCount === 4) {
                                                    clearInterval(intervalId);
                                                }
                                            }
                        
                                            intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second
                        
                                            intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds
                                            
                                            setTimeout(function () {
                                                
                                                document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                document.body.style.backgroundColor = 'red';
                                            }, 6000); //7 seconds
                        
                                            setTimeout(function () {
                                            // Exit the game button
                                            const exitButton = document.createElement('button');
                                            exitButton.textContent = 'Exit Game';
                                            exitButton.addEventListener('click', function() {
                                                document.location.reload();
                                            });
                                            document.body.appendChild(exitButton);
                                            }, 9000); //7 seconds
                        
                                        }
                                    });
                                    document.body.appendChild(button);
                                });
                            });
                            // Append the button to the document body
                            document.body.appendChild(simpleButton);
                        });



                    
                    document.body.appendChild(weaponButton);
                    });
                }



//What to take in drug store--
                if (choice === 'drug store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                    drugChoices.forEach(function (drugChoice) {
                        var drugButton = document.createElement('button');
                        drugButton.innerHTML = drugChoice;
                        drugButton.addEventListener('click', function () {
                            inventory.push(drugChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                            // Ask if the player wants to take anything else in the drug store
                            var takeAnythingElseButton = document.createElement('button');
                            takeAnythingElseButton.innerHTML = 'Take anything else?';
                            takeAnythingElseButton.addEventListener('click', function () {
                                document.body.innerHTML = ''; // Clear the screen
                                document.body.innerHTML += '<h2>What else will you take?</h2>';

                                var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                additionalChoices.forEach(function (additionalChoice) {
                                    var additionalButton = document.createElement('button');
                                    additionalButton.innerHTML = additionalChoice;
                                    additionalButton.addEventListener('click', function () {
                                        inventory.push(additionalChoice); // Add the chosen item to the inventory
                                        document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                    });
                                    document.body.appendChild(additionalButton);

                                });


                                // Leave button for Drug 1
                                var simpleButton = document.createElement('button');
                                simpleButton.innerHTML = 'Leave the store';

                                // Add an event listener to the button
                                simpleButton.addEventListener('click', function () {
                                    // Perform some action when the button is clicked
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['grocery store', 'Gun store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'grocery store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                        // Ask if the player wants to take anything else in the grocery store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                                });
                                                                document.body.appendChild(additionalButton);
                                                            });

                                                            document.body.appendChild(goBackButton);
                                                        });

                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });

                                                    document.body.appendChild(groceryButton);

                                                });

                                            }
                                            if (choice === 'Gun store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['Grenade', 'M6', 'AK47'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        // Ask if the player wants to take anything else in the drug store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['Flashbomb', 'Smokebomb', 'Munitions'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
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

                                            }//
                                            if (choice === 'the white house') {
                                                document.body.innerHTML += '<p>You chose to go to the White House...</p>';
                                                setTimeout(function () {
                                                    document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                                                }, 3000); // 3 seconds
                                            }
                                        });
                                        document.body.appendChild(button);
                                    });
                                });

                                // Append the button to the document body
                                document.body.appendChild(simpleButton);



                            });

                            document.body.appendChild(takeAnythingElseButton);

                            var simpleButton = document.createElement('button');
                            simpleButton.innerHTML = 'Leave the store';

                            // Add an event listener to the button
                            simpleButton.addEventListener('click', function () {
                                // Perform some action when the button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['grocery store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'grocery store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                    // Ask if the player wants to take anything else in the grocery store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                            });
                                                            document.body.appendChild(additionalButton);
                                                        });

                                                        document.body.appendChild(goBackButton);
                                                    });

                                                    document.body.appendChild(takeAnythingElseButton);

                                                });

                                                document.body.appendChild(groceryButton);

                                            });

                                        }
                                        if (choice === 'drug store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    // Ask if the player wants to take anything else in the drug store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
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

                                                //Leave Button drug 2
                                                var simpleButton = document.createElement('button');
                                                simpleButton.innerHTML = 'Leave the store';

                                                // Add an event listener to the button
                                                simpleButton.addEventListener('click', function () {
                                                    // Perform some action when the button is clicked
                                                    document.body.innerHTML = '';
                                                    document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                                    var choices = ['grocery store', 'drug store', 'the white house'];
                                                    choices.forEach(function (choice) {
                                                        var button = document.createElement('button');
                                                        button.innerHTML = choice;
                                                        // choice of where to go
                                                        button.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                                            // choice of what to take
                                                            if (choice === 'grocery store') {
                                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                                var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                                                groceryChoices.forEach(function (groceryChoice) {
                                                                    var groceryButton = document.createElement('button');
                                                                    groceryButton.innerHTML = groceryChoice;
                                                                    groceryButton.addEventListener('click', function () {
                                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                                        // Ask if the player wants to take anything else in the grocery store
                                                                        var takeAnythingElseButton = document.createElement('button');
                                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = ''; // Clear the screen
                                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                                var additionalButton = document.createElement('button');
                                                                                additionalButton.innerHTML = additionalChoice;
                                                                                additionalButton.addEventListener('click', function () {
                                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                                                });
                                                                                document.body.appendChild(additionalButton);
                                                                            });

                                                                            document.body.appendChild(goBackButton);
                                                                        });

                                                                        document.body.appendChild(takeAnythingElseButton);

                                                                    });

                                                                    document.body.appendChild(groceryButton);

                                                                });

                                                            }
                                                            if (choice === 'drug store') {
                                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                                var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                                                drugChoices.forEach(function (drugChoice) {
                                                                    var drugButton = document.createElement('button');
                                                                    drugButton.innerHTML = drugChoice;
                                                                    drugButton.addEventListener('click', function () {
                                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                        // Ask if the player wants to take anything else in the drug store
                                                                        var takeAnythingElseButton = document.createElement('button');
                                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = ''; // Clear the screen
                                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                            var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                                var additionalButton = document.createElement('button');
                                                                                additionalButton.innerHTML = additionalChoice;
                                                                                additionalButton.addEventListener('click', function () {
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

                                                            }//
                                                            if (choice === 'the white house') {
                                                                document.body.innerHTML += '<p>You chose to go to the White House...</p>';
                                                                setTimeout(function () {
                                                                    document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                                                                }, 3000); // 3 seconds
                                                            }
                                                        });
                                                        document.body.appendChild(button);
                                                    });
                                                });

                                                // Append the button to the document body
                                                document.body.appendChild(simpleButton);

                                                document.body.appendChild(drugButton);

                                            });

                                        }//
                                        if (choice === 'the white house') {
                                            document.body.innerHTML += '<p>You chose to go to the White House...</p>';
                                            setTimeout(function () {
                                                document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                                            }, 3000); // 3 seconds
                                        }
                                    });
                                    document.body.appendChild(button);
                                });
                            });

                            // Append the button to the document body
                            document.body.appendChild(simpleButton);
                        });

                        document.body.appendChild(drugButton);

                    });

                }
                //what happens in white house
                if (choice === 'the white house') {
                    document.body.innerHTML += '<p>As you walk to the white house...</p>';
                    
                    var intervalId;
                    var isBlue = true;
                    var toggleCount = 0;

                    function toggleSiren() {
                        if (isBlue) {
                            document.body.style.backgroundColor = 'red';
                            isBlue = false;
                        } else {
                            document.body.style.backgroundColor = 'blue';
                            isBlue = true;
                        }

                        toggleCount++;
                        if (toggleCount === 4) {
                            clearInterval(intervalId);
                        }
                    }

                    intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                    intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                    setTimeout(function () {
                        
                        document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                        document.body.style.backgroundColor = 'red';
                    }, 6000); //7 seconds

                    setTimeout(function () {
                    // Exit the game button
                    const exitButton = document.createElement('button');
                    exitButton.textContent = 'Exit Game';
                    exitButton.addEventListener('click', function() {
                        document.location.reload();
                    });
                    document.body.appendChild(exitButton);
                    }, 9000); //7 seconds

                }






            });
            
            document.body.appendChild(button);






        });
        
    });

    

    document.getElementById('phone').addEventListener('click', function () {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>What do you want to do?</h1>';
        document.body.innerHTML += '<img src="img/phone.png" alt="Image" style="width: 250px">';
        // Create buttons for the player's choices
        var button1 = document.createElement('button');
        button1.innerHTML = 'Call someone';

        button1.addEventListener('click', function () {
            document.body.innerHTML = '';
            document.body.innerHTML += '<h1>Who will you call?</h1>';
            document.body.innerHTML += '<img src="img/Calling.png" alt="Calling" style="width: 250px">';
            var choices = ['Joe', 'Mama', 'Freddy', 'Brother'];
            function choice(person) {
                var button = document.createElement('button');
                button.innerHTML = person;
                button.addEventListener('click', function () {
                    document.body.innerHTML = '';
                    document.body.innerHTML += '<h1>You chose to call: ' + person + '</h1>';
                    if (person === 'Joe') {
                        document.body.innerHTML += '<p><b>Joe:</b> <f>Hey! What can I do for you?</f></p>';
                        // Player's possible responses to Joe
                        document.body.innerHTML += '<button id="Help-me-survive">I need your help!</button>';
                        document.body.innerHTML += '<button id="responseToJoe">Can I come to the White House bunker?</button>';
                        document.getElementById('Help-me-survive').addEventListener('click', function () {
                            // Code to run when the "Help-me-survive" button is clicked
                            document.body.innerHTML = '';
                            document.body.innerHTML += '<h1>Joe</h1>'
                            document.body.innerHTML += '<p><b>Joe:</b> Hey! What can I do for you?</p>';
                            document.body.innerHTML += '<p><b>You:</b> I need your help.</p>';
                            document.body.innerHTML += '<p><b>Joe:</b> <j>Yeah for sure, tell me what you need.</j></p>';

                            // Create buttons for the player's choices
                            var button1 = document.createElement('button');
                            button1.innerHTML = 'Ask Joe to pick up family';
                            button1.addEventListener('click', function () {
                                // Code to run when the "Ask Joe to pick up family" button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<h1>Joe</h1>'
                                document.body.innerHTML += '<p><b>Joe:</b> Hey! What can I do for you?</p>';
                                document.body.innerHTML += '<p><b>You:</b> I need your help.</p>';
                                document.body.innerHTML += '<p><b>Joe:</b> Yeah for sure, tell me what you need.</p>';
                                document.body.innerHTML += '<p><b>You:</b> Man I\'m worried for my family, can you do something to get them to a safe place?</p>'
                                setTimeout(function () {
                                    document.body.innerHTML += '<p><b>Joe:</b> <j>Sure, I will send a troop to go and pick up your family.</j></p>';
                                    var textElements = document.querySelectorAll('j');

                                    // Add CSS styling to the 'strong' class
                                    var style = document.createElement('style');
                                    style.innerHTML = '.strong { font-weight: bold; }';
                                    document.head.appendChild(style);

                                    textElements.forEach(function (element) {
                                        var text = element.innerHTML;
                                        element.innerHTML = '';
                                        var i = 0;
                                        var speed = 35; // Adjust the typing speed here (in milliseconds)

                                        function typeWriter() {
                                            if (i < text.length) {
                                                element.innerHTML += text.charAt(i);
                                                i++;
                                                setTimeout(typeWriter, speed);
                                            }
                                        }

                                        typeWriter();
                                    });
                                }, 3000); // 3 seconds
                                setTimeout(function () {
                                    document.body.innerHTML += '<h2><j>Congratulations, you just saved your whole family!</j></h2>';
                                }, 6000); // 4.5 seconds
                                setTimeout(function () {
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<h1>What will you do now?<h1>';
                                    document.body.innerHTML += '<button id="phone">Call someone else</button>';
                                    document.body.innterHTML += '<button id="weapon">Run somewhere</button>';
                                }, 9000); // 9 seconds


                                // Additional code for handling Joe picking up family
                            });



                            var button2 = document.createElement('button');
                            button2.innerHTML = 'Ask Joe to pick up friends';
                            button2.addEventListener('click', function () {
                                // Code to run when the "Ask Joe to pick up friends" button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<h1>Joe</h1>'
                                document.body.innerHTML += '<p><b>Joe:</b> Alright, I will go and pick up your friends.</p>';
                                // Additional code for handling Joe picking up friends
                            });

                            var button3 = document.createElement('button');
                            button3.innerHTML = 'Send a helicopter to save yourself';
                            button3.addEventListener('click', function () {
                                // Code to run when the "Send a helicopter to save yourself" button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<h1>Joe</h1>'
                                document.body.innerHTML += '<p><b>Joe:</b> Sorry, I can\'t arrange a helicopter. You\'re on your own.</p>';
                                document.body.innerHTML += '<button id="F-joe">Tell joe to go F@ck himself.</button>'
                                document.body.innerHTML += '<button id="F-joe2">Wish him well.</button>'
                                document.getElementById('F-joe').addEventListener('click', function () {
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<h1>Joe</h1>'
                                    document.body.innerHTML += '<p><b>Joe:</b> Sorry, I can\'t arrange a helicopter. You\'re on your own.</p>';
                                    document.body.innerHTML += '<p><b>You:</b> x@xx you Joe!</p>';
                                    document.body.innerHTML += '<p><b>Joe:</b> <j>Goodbye!</j></p>';
                                    setTimeout(function () {
                                        location.reload();
                                    } , 5000);
                                });
                                document.getElementById('F-joe2').addEventListener('click', function () {  
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<h1>Joe</h1>'
                                    document.body.innerHTML += '<p><b>Joe:</b> Sorry, I can\'t arrange a helicopter. You\'re on your own.</p>';
                                    document.body.innerHTML += '<p><b>You:</b> Goodbye Joe, take care.</p>';
                                    document.body.innerHTML += '<p><b>Joe:</b> <j>Goodbye!</j></p>';
                                    setTimeout(function () {
                                        location.reload();
                                    } , 5000);
                                });

                                
                                // Additional code for handling sending a helicopter
                            });

                            // Append the buttons to the document body
                            document.body.appendChild(button1);
                            document.body.appendChild(button2);
                            document.body.appendChild(button3);



                            // Typing animation effect
                            var textElements = document.querySelectorAll('j');

                            // Add CSS styling to the 'strong' class
                            var style = document.createElement('style');
                            style.innerHTML = '.strong { font-weight: bold; }';
                            document.head.appendChild(style);

                            textElements.forEach(function (element) {
                                var text = element.innerHTML;
                                element.innerHTML = '';
                                var i = 0;
                                var speed = 35; // Adjust the typing speed here (in milliseconds)

                                function typeWriter() {
                                    if (i < text.length) {
                                        element.innerHTML += text.charAt(i);
                                        i++;
                                        setTimeout(typeWriter, speed);
                                    }
                                }

                                typeWriter();
                            });

                            var textElements = document.querySelectorAll('o')

                            var style = document.createElement('style');
                            style.innerHTML = '.strong { font-weight: bold; }';
                            document.head.appendChild(style);
                            textElements.forEach(function (element) {
                                var text = element.innerHTML;
                                element.innerHTML = '';
                                var i = 0;
                                var speed = 35; // Adjust the typing speed here (in milliseconds)

                                function typeWriter() {
                                    if (i < text.length) {
                                        element.innerHTML += text.charAt(i);
                                        i++;
                                        setTimeout(typeWriter, speed);
                                    }
                                }

                                typeWriter();

                            });
                        });
                    }
                    if (person === 'Mama') {
                        document.body.innerHTML += '<p>Hey it\'s been a while how are you doing?</p>';
                        document.body.innerHTML += '<button id="Convo">I\'m fine how are you mom?</button>';
                        document.body.innerHTML += '<button id="responseToJoe">Mom! there\'s no time! You need to come to me!</button>';
                        document.getElementById('Convo').addEventListener('click', function () {
                            document.body.innerHTML = '';
                            document.body.innerHTML += '<p>Hey it\'s been a while how are you doing?</p>';
                            document.body.innerHTML += '<p>I\'m fine how are you mom?</p>';
                            document.body.innerHTML += '<p>Good to hear that you are fine, I\'m doing good too.</p>';
                        });
                    }

                    if (person === 'Freddy') {
                        document.body.innerHTML += '<p><b>You:</b> Hello?</p>';
                        // Play sound for Freddy
                                var audio = new Audio('mp3/ I want to break free Sound .mp3');
                                audio.play();
                                document.body.innerHTML += '<img src="img/Freddy.png" alt="Freddy" style="width: 250px">';
                                // Typing animation effect  for Freddy
                                var textElements = document.querySelectorAll('f');
                                textElements.forEach(function (element) {
                                    var text = element.innerHTML;
                                    element.innerHTML = '';
                                    var i = 0;
                                    var speed = 35; // Adjust the typing speed here (in milliseconds)

                                    function typeWriter() {
                                        if (i < text.length) {
                                            element.innerHTML += text.charAt(i);
                                            i++;
                                            setTimeout(typeWriter, speed);
                                        }
                                    }

                                    typeWriter();
                                    // Start the typing animation
                                });
                        document.body.innerHTML += '<p><b>Freddy:</b> <f>I want to break free!</f></p>';
                    }
                    if (person === 'Brother') {
                        document.body.innerHTML += '<p>Brother is not available right now. Please leave a message after the beep.</p>';
                    }

                    // Typing animation effect
                    var textElements = document.querySelectorAll('f');
                    textElements.forEach(function (element) {
                        var text = element.innerHTML;
                        element.innerHTML = '';
                        var i = 0;
                        var speed = 35; // Adjust the typing speed here (in milliseconds)

                        function typeWriter() {
                            if (i < text.length) {
                                element.innerHTML += text.charAt(i);
                                i++;
                                setTimeout(typeWriter, speed);
                            }
                        }

                        typeWriter();
                        // Start the typing animation
                    });



                });

                document.body.appendChild(button);
            }
            choices.forEach(function (person) {
                choice(person);
            });
        });
        document.body.appendChild(button1);

        var button2 = document.createElement('button');
        button2.innerHTML = 'Watch a tutorial on how to survive';
        button2.addEventListener('click', function () {
        var videoUrl = "https://www.youtube.com/watch?v=Tvyx-1IpU58";
        window.location.href = videoUrl;
            
        });
        document.body.appendChild(button2);
    });

}
