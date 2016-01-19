app.service('badmaashService', [function(){
	var badmaashPages = {
		badmaashAbout:
		{ 
			name: 'about-us', 
			title: 'About Us',			
			content: [
				{
					title: 'HISTORY',
					section: '<h3>HISTORY</h3><p>Nobel University was founded in the summer of 2000 in Los Angeles, California. Committed to producing quality practitioners of Oriental Medicine, the University began by offering the Master of Science in Oriental Medicine program (MSOM).</p> <p>In 2003, the Bureau for Private Postsecondary Education approved the University to offer a certificate program in English as a Second Language (ESL), and in 2004 it was approved to offer the Bachelor of Arts in Business Administration (BBA) and Master of Business Administration (MBA) programs. In 2006, the University added the Bachelor of Arts in Church Music program (BCM).</p> <p>In 2013, Nobel University shifted its strategic plan and its focus by concentrating exclusively on its business program offerings. Since Nobel University no longer provides the Certificate in English as a Second Language, Bachelor of Arts in Church Music, and Master of Science in Oriental Medicine programs, the University is able to specialize in the business education and deliver world-class education to its students. </p>'
				},
				{
					title: 'MISSION STATEMENT',
					section: '<h3>MISSION STATEMENT</h3><p>The mission of Nobel University is to advance responsible business practice through pragmatic education that is entrepreneurial in nature, relevant in focus, and global in orientation.</p>'
				}
			],
			
		},
		badmaashMenu:
		{ 
			name: 'menu', 
			title: 'Menu',	
			featuredMenu : [
				{
					name: 'Chickenpea & Chips (papri chaat)',
					description: 'masala chickenpea + potato, crisp chips, whipped yogurt, tamarind + mint chutneys',
					price : 6,
					thumb: ''
				},
				{
					name: 'Chickenpea & Chips (papri chaat)',
					description: 'masala chickenpea + potato, crisp chips, whipped yogurt, tamarind + mint chutneys',
					price : 6,
					thumb: ''
				},
				{
					name: 'Chickenpea & Chips (papri chaat)',
					description: 'masala chickenpea + potato, crisp chips, whipped yogurt, tamarind + mint chutneys',
					price : 6,
					thumb: ''
				}
			],
			foodMenu: {
				bombay: [
					{
						name: 'Chickenpea & Chips (papri chaat)',
						description: 'masala chickenpea + potato, crisp chips, whipped yogurt, tamarind + mint chutneys',
						price : 6,
						thumb: ''
					},
					{
						name: '2-bite Fish Fry (machhi amritsari)',
						description: 'daily select fish golden brown in chickenpea batter with carom seed, dried mango dust',
						price : 8,
						thumb: ''
					},
					{
						name: 'Holy Cow! Keema Pow!!',
						description: 'ground beef chunk + sweet pea slow stewed with tomato, ginger, cardamom, with crisp bun',
						price : 10,
						thumb: ''
					},
					{
						name: 'Indian Pickles (gharwalla achaar)',
						description: 'pickled in house with spices',
						price : 8,
						price2 : 5,
						thumb: ''
					},
					{
						name: 'Chef Pav\'s Pink Lentil Soup',
						description: 'yellow + pink lentils with tempered mustard seed, plum tomato, ginger, cilantro',
						price : 6,
						thumb: ''
					},
				],
				tandoori: [
					{
						name: 'Tandoori Shrimp',
						description: 'large prawns marinated in yogurt, garlic, mustard, seed, cumin, skewer fired in the tandoor',
						price : 16,
						thumb: ''
					},
					{
						name: 'Badass Chicken Tikka',
						description: 'traditional \"dhaba style\" preparation with yogurt ginger, dried fenugreek + paprika',
						price : 13,
						thumb: ''
					},
					{
						name: '#HotSpicyIndianSausage (seekh kabaab)',
						description: 'ground + spiced in house daily, with onion, mint, cilantro + mixed chilies',
						price : 13,
						thumb: ''
					},
					{
						name: 'Mixed Mushroom Tandoori',
						description: 'portabello, cremini + white field mushrooms marinated in tandoori masala',
						price : 12,
						thumb: ''
					}					
				],
				foodPorn: [
					{
						name: 'Chicken Tikka Poutine',
						description: 'canadian eh!? masala fries topped with cheese curds, doused in piping hot beef gravy, all topped with chicken tikka + cilantro',
						price : 12,
						thumb: ''
					},
					{
						name: 'Slow Braised Beef Short Rib',
						description: 'dry rubbed with cinnamon, red chili, turmeric + cumin overnight, then slow-braised with tomato + onion',
						price : 15,
						thumb: ''
					},
					{
						name: 'Spiced Mango Pork Belly',
						description: 'slow cooked in its own juices with aromatics + spices, seared to finish with spiced mango chutney',
						price : 15,
						thumb: ''
					},
					{
						name: 'Punjabi Pork Confit',
						description: 'rump + belly cooked in its own fats + juices, with turmeric, cumin, tomato + serrano chili',
						price : 14,
						thumb: ''
					},
					{
						name: 'Dad\'s Famous Carlsbad Mussels',
						description: 'madras style - coconut milk curry with paprika, turmeric, plum potato, onion + cilantro',
						price : 16,
						thumb: ''
					},
					{
						name: 'Spiced Lamb Burger',
						description: 'ground and spiced in house - with spiced mayo, onion, lettuce, tomato on brioche bun',
						price : 13,
						thumb: ''
					},
					{
						name: 'Chili Cheese Naan',
						description: 'tandoori naan stuffed with american chedder, serrano chilies + cilantro - with yogurt raita',
						price : 6,
						thumb: ''
					},
					{
						name: 'Masala Potato Fries',
						description: 'tossed in smoked paprika masala, topped with cilantro - served with paprika spiced mayo',
						price : 6,
						thumb: ''
					}
				],
				samosas: [
					{
						name: 'The Traditional',
						description: 'masala potato and pea with cumin, coriander seeds and ginger',
						price : 6,
						thumb: ''
					},
					{
						name: 'Butter Chicken',
						description: 'we\'ve taken this classic and put it in deepfried-awesomeness',
						price : 7,
						thumb: ''
					},
					{
						name: 'Slow Cooked Short Rib',
						description: 'succulent short rib with charred pineapple and cilantro',
						price : 8,
						thumb: ''
					}
				],
				condiments: [
					{
						name: 'Whipped Cucumber Yogurt Raita',
						description: 'with toasted cumin + indian black salt',
						price : 3,
						thumb: ''
					},
					{
						name: 'Spiced Mango Chutney',
						description: 'sweet-spicy; recommended with everything',
						price : 3,
						thumb: ''
					},
					{
						name: 'Masala Onion & Chilies',
						description: 'for real OG Indian diners',
						price : 3,
						thumb: ''
					},
					{
						name: '5 Pepper Hot Sauce aka \"Boss Sauce\"',
						description: 'spicy + smokey ... emphasis on the spicy',
						price : 1,
						thumb: ''
					},
					{
						name: 'Tamarind & Mint-Cilantro Chutney',
						description: 'the most popular chutneys ever! - just ask',
						price : 3,
						thumb: ''
					}
				],
				traditional: [
					{
						name: 'Chicken Tikka Masala',
						description: 'indian classic - chicken sauteed in a spicy tomato curry with diced onion and sweet peppers',
						price : 13,
						thumb: ''
					},
					{
						name: 'Sweet & Sour Spiced Pumpkin',
						description: 'diced pumpkin braised with fennel + mustard seeds, red chili pepper + mango dust',
						price : 13,
						thumb: ''
					},
					{
						name: 'Punjabi Style Chickenpeas (channa masala)',
						description: 'sauteed in house masala mix, topped with diced red onion + tamarind chutney',
						price : 11,
						thumb: ''
					},
					{
						name: 'Ghost Chili Lamb Vindaloo',
						description: 'lamb + potato braised in a spicy curry of bhoot jolokia, serrano + red chili peppers',
						price : 14,
						thumb: ''
					},
					{
						name: 'Good Ol\' Saag Paneer',
						description: 'mom\'s secret recipe of baby spinach sauteed with tomato, onion + indian paneer cheese',
						price : 12,
						thumb: ''
					},
					{
						name: 'Smoked Eggplant Mash (bangain bharta)',
						description: 'tandoor snoked eggplant mashed with caramelized onion, roasted garlic + spices',
						price : 11,
						thumb: ''
					},
					{
						name: 'Fresh Tandoori Naan',
						description: '',
						price : 3,
						thumb: ''
					},
					{
						name: 'Tandoori Roti',
						description: '',
						price : 3,
						thumb: ''
					},
					{
						name: 'Basmati Pilaf',
						description: '',
						price : 3,
						thumb: ''
					}
				]
			},
		},
		badmaashHome:
		{ 
			name: 'home', 
			title: 'Home',			
			content: [
				{
					title: 'HISTORY',
					section: '<h3>HISTORY</h3><p>Nobel University was founded in the summer of 2000 in Los Angeles, California. Committed to producing quality practitioners of Oriental Medicine, the University began by offering the Master of Science in Oriental Medicine program (MSOM).</p> <p>In 2003, the Bureau for Private Postsecondary Education approved the University to offer a certificate program in English as a Second Language (ESL), and in 2004 it was approved to offer the Bachelor of Arts in Business Administration (BBA) and Master of Business Administration (MBA) programs. In 2006, the University added the Bachelor of Arts in Church Music program (BCM).</p> <p>In 2013, Nobel University shifted its strategic plan and its focus by concentrating exclusively on its business program offerings. Since Nobel University no longer provides the Certificate in English as a Second Language, Bachelor of Arts in Church Music, and Master of Science in Oriental Medicine programs, the University is able to specialize in the business education and deliver world-class education to its students. </p>'
				},
				{
					title: 'MISSION STATEMENT',
					section: '<h3>MISSION STATEMENT</h3><p>The mission of Nobel University is to advance responsible business practice through pragmatic education that is entrepreneurial in nature, relevant in focus, and global in orientation.</p>'
				}
			],
			
		},
		badmaashPress:
		{ 
			name: 'press', 
			title: 'Press',			
			content: [
				{
					title: 'HISTORY',
					section: '<h3>HISTORY</h3><p>Nobel University was founded in the summer of 2000 in Los Angeles, California. Committed to producing quality practitioners of Oriental Medicine, the University began by offering the Master of Science in Oriental Medicine program (MSOM).</p> <p>In 2003, the Bureau for Private Postsecondary Education approved the University to offer a certificate program in English as a Second Language (ESL), and in 2004 it was approved to offer the Bachelor of Arts in Business Administration (BBA) and Master of Business Administration (MBA) programs. In 2006, the University added the Bachelor of Arts in Church Music program (BCM).</p> <p>In 2013, Nobel University shifted its strategic plan and its focus by concentrating exclusively on its business program offerings. Since Nobel University no longer provides the Certificate in English as a Second Language, Bachelor of Arts in Church Music, and Master of Science in Oriental Medicine programs, the University is able to specialize in the business education and deliver world-class education to its students. </p>'
				},
				{
					title: 'MISSION STATEMENT',
					section: '<h3>MISSION STATEMENT</h3><p>The mission of Nobel University is to advance responsible business practice through pragmatic education that is entrepreneurial in nature, relevant in focus, and global in orientation.</p>'
				}
			],
			
		},
		badmaashContact:
		{ 
			name: 'contact', 
			title: 'Contact',			
			content: [
				{
					title: 'HISTORY',
					section: '<h3>HISTORY</h3><p>Nobel University was founded in the summer of 2000 in Los Angeles, California. Committed to producing quality practitioners of Oriental Medicine, the University began by offering the Master of Science in Oriental Medicine program (MSOM).</p> <p>In 2003, the Bureau for Private Postsecondary Education approved the University to offer a certificate program in English as a Second Language (ESL), and in 2004 it was approved to offer the Bachelor of Arts in Business Administration (BBA) and Master of Business Administration (MBA) programs. In 2006, the University added the Bachelor of Arts in Church Music program (BCM).</p> <p>In 2013, Nobel University shifted its strategic plan and its focus by concentrating exclusively on its business program offerings. Since Nobel University no longer provides the Certificate in English as a Second Language, Bachelor of Arts in Church Music, and Master of Science in Oriental Medicine programs, the University is able to specialize in the business education and deliver world-class education to its students. </p>'
				},
				{
					title: 'MISSION STATEMENT',
					section: '<h3>MISSION STATEMENT</h3><p>The mission of Nobel University is to advance responsible business practice through pragmatic education that is entrepreneurial in nature, relevant in focus, and global in orientation.</p>'
				}
			],
			
		},
		badmaashReservation:
		{ 
			name: 'reservation', 
			title: 'Reservation',			
			content: [
				{
					title: 'HISTORY',
					section: '<h3>HISTORY</h3><p>Nobel University was founded in the summer of 2000 in Los Angeles, California. Committed to producing quality practitioners of Oriental Medicine, the University began by offering the Master of Science in Oriental Medicine program (MSOM).</p> <p>In 2003, the Bureau for Private Postsecondary Education approved the University to offer a certificate program in English as a Second Language (ESL), and in 2004 it was approved to offer the Bachelor of Arts in Business Administration (BBA) and Master of Business Administration (MBA) programs. In 2006, the University added the Bachelor of Arts in Church Music program (BCM).</p> <p>In 2013, Nobel University shifted its strategic plan and its focus by concentrating exclusively on its business program offerings. Since Nobel University no longer provides the Certificate in English as a Second Language, Bachelor of Arts in Church Music, and Master of Science in Oriental Medicine programs, the University is able to specialize in the business education and deliver world-class education to its students. </p>'
				},
				{
					title: 'MISSION STATEMENT',
					section: '<h3>MISSION STATEMENT</h3><p>The mission of Nobel University is to advance responsible business practice through pragmatic education that is entrepreneurial in nature, relevant in focus, and global in orientation.</p>'
				}
			],
			
		}
		
	};

	badmaashPages.PageList = [
		badmaashPages.badmaashAbout,
		badmaashPages.badmaashMenu,
		badmaashPages.badmaashHome,
		badmaashPages.badmaashPress,
		badmaashPages.badmaashContact,
		badmaashPages.badmaashReservation
	
	];


	return badmaashPages;
}])