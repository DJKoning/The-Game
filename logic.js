	var level1 = 0
	var level2 = 0
	var level3 = 0
	var level4 = 0
	var level5 = 0
	var level6 = 0
	var level7 = 0
	var level8 = 0
	var level9 = 0
	var level10 = 0

function promptMe(){

		var level1 =  prompt('Level 1: Wat is 3+4?')

				if (level1 == 7 ) {var level2 = prompt('Level 2: Hoe heet deze code language? Graag in kleine letters.')

					if (level2 == 'html' ) {var level3 = prompt('Level 3: Waar staat de afkorting PC voor? Graag aan elkaar en in kleine letters.')

						if (level3 == 'personalcomputer') {var level4 = prompt('Level 4: In welke school zit je? Graag aan elkaar en in kleine letters.')

							if (level4 == 'davincicollege') {var level5 = prompt('Level 5: Welke code language is identiek aan HTML? Graag aan elkaar en in kleine letters.')

								if (level5 == 'javascript') {var level6 = prompt('Level 6: In welke opleiding zit je? Graag in kleine letters.')

									if (level6 == 'ict') {var level7 = prompt('Level 7: Waar staat "var" voor? Graag in kleine letters.')

										if (level7 == 'variabele') {var level8 = prompt('Level 8: Wat doet " var test prompt(Dit is een test)"? \n A. Het geeft een pop-up,\n B. Het doet niks,\n C. Het geeft een alert \n  Graag antwoorden in hoofdletter.')	
											
											if (level8 == 'B') {var level9 = prompt('Level 9: Wat is het release jaar van "Rocket League"?')

												if (level9 == 2015) {var level10 = prompt('Level 10: Waar staat "HDD" voor? Graag in kleine letters en aan elkaar.')

													if (level10 == 'harddrivedisk') {alert("Gefeliciteerd! Je hebt gewonnen!!")

														} else {alert("Sorry, je bent game over.");											
														}
													} else {alert("Sorry, je bent game over.");												
													}
												} else {alert("Sorry, je bent game over.");												
												}
											} else {alert("Sorry, je bent game over.");
										}
										} else {alert("Sorry, je bent game over.");
									}
									} else {alert("Sorry, je bent game over.");
								}
								} else {alert("Sorry, je bent game over.");
							}
							} else {alert("Sorry, je bent game over.");
						}
						} else {alert("Sorry, je bent game over.");
					}
	 				} else {alert("Sorry, je bent game over.")
	 			}}	
