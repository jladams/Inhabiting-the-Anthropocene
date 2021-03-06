//design notes
//Node size: as now
//--Author nodes largest, like Approach nodes in approach_elements; have name visible
//--Post nodes same as in approach elements
//Mouse behavior
//--Post nodes: onHover--show title; onClick--go to URL with post
//--Author nodes: onClick--go to URL with bio
//--Edges: none
//Color scheme
//--Nodes
//----Author nodes: see chart below
//----Post nodes: reading posts another basic color; reflection posts a second other basic color
//--Edges: 
//----Author-author edges: black
//----Author-post edges: same color as type of post (i.e. reading or reflection)
//Color palette
//--Approach colors
//----D: #AF923C (brownish)
//----I: #9C3655 (reddish)
//----N: #649C35 (greenish)
//----P: #36367A (bluish)
//--Author colors
//---D color family
//----Kiza: #FFEAAC
//----Antonio: #D9BE6E
//----Ingo: #876B19
//----Lynn: #5C4501
//---I color family
//----Asa: #C2627F
//----Noah: #791634
//---N color family
//----Zev: #8DC162
//---P color family
//----Meghan: #585898


var BlogEles = {
    nodes: [
    //Post nodes
    //--Reading posts (all have same color)
        { data: { id: '1', name: 'Of Property', href: 'http://sma.ztclasses.com/post1.html', color: '#009933', weight:60 } },
        { data: { id: '4', name: 'Organisms as Ecosystem Engineers', href: 'http://sma.ztclasses.com/post4', color: '#009933', weight:60 } },
        { data: { id: '13', name: '"Diachronous Beginnings of the Anthropocene: The Lower Bounding Surface of Anthropogenic Deposits"', href: 'http://sma.ztclasses.com/post13.html', color: '#009933', weight:60 } },
        { data: { id: '14', name: 'Building "Equitable" Urban Resilience: The Challenge for Cities', href: 'http://sma.ztclasses.com/post14.html', color: '#009933', weight:60 } },
        { data: { id: '17', name: 'Principles of Tsawalk: An Indigenous Approach to Global Crisis', href: 'http://sma.ztclasses.com/post17.html', color: '#009933', weight:60 } },
        { data: { id: '18', name: '"Loess: The Yellow Earth"', href: 'http://sma.ztclasses.com/post18.html', color: '#009933', weight:60 } },
        { data: { id: '22', name: '"Concluding Remarks" on Animal Ecology and Demography', href: 'http://sma.ztclasses.com/post22.html', color: '#009933', weight:60 } },
        { data: { id: '23', name: '"A Safe Operating Space for Humanity"', href: 'http://sma.ztclasses.com/post23.html', color: '#009933', weight:60 } },
    //--Reflection posts (all have same color--different from Reading posts)
        { data: { id: '25', name: 'Toward an Ethics of Niche Construction', href: 'http://sma.ztclasses.com/post25.html', color: '#CC00CC', weight:60 } },
        { data: { id: '26', name: 'Implications of Manufacturing Habitability', href: 'http://sma.ztclasses.com/post26.html', color: '#CC00CC', weight:60 } },
        { data: { id: '27', name: 'Advancing Equity and Going Beyond Basic Survival', href: 'http://sma.ztclasses.com/post27.html', color: '#CC00CC', weight:60 } },
        { data: { id: '28', name: 'Memes as a Dimension of the Human Niche', href: 'http://sma.ztclasses.com/post28.html', color: '#CC00CC', weight:60 } },
        { data: { id: '29', name: "Habitability's Non-Inevitability", href: 'http://sma.ztclasses.com/post29.html', color: '#CC00CC', weight:60 } },
        { data: { id: '31', name: 'Habitability as a commons: Fearing a tragedy of human(ized) nature', href: 'http://sma.ztclasses.com/post31.html', color: '#CC00CC', weight:60 } },
        { data: { id: '32', name: 'Toward a More Than Human Anthropocene', href: 'http://sma.ztclasses.com/post32.html', color: '#CC00CC', weight:60 } },
        { data: { id: '36', name: 'The Dust of Civilization', href: 'http://sma.ztclasses.com/post36.html', color: '#CC00CC', weight:60 } },
    //--Author nodes (color by primary approach)
        { data: { id: 'ZT', name: 'Zev Trachtenberg', href: 'http//sma.ztclasses.com/#zt/', color: '#8DC162', weight:120 } },
        { data: { id: 'KG', name: 'Kiza Gates', href: 'http//sma.ztclasses.com/bio#kg/', color: '#FFEAAC', weight:120 } },
        { data: { id: 'AR', name: 'Asa Randall', href: 'http//sma.ztclasses.com/bio#ar/', color: '#C2627F', weight:120 } },
        { data: { id: 'MW', name: 'K. Meghan Wieters', href: 'http//sma.ztclasses.com/bio#mw/', color: '#585898', weight:120 } },
        { data: { id: 'NT', name: 'Noah Theriault', href: 'http//sma.ztclasses.com/bio#nt/', color: '#791634', weight:120 } },
        { data: { id: 'LS', name: 'Gerilyn Soreghan', href: 'http//sma.ztclasses.com/bio#ls/', color: '#5C4501', weight:120 } },
        { data: { id: 'IS', name: 'Ingo Schlupp', href: 'http//sma.ztclasses.com/post22/', color: '#876B19', weight:120 } },
        { data: { id: 'AC', name: 'Antonio Martinez Castro', href: 'http//sma.ztclasses.com/bio#ac/', color: '#D9BE6E', weight:120 } }
  
	],	
    edges: [
		//Author-author edges
//        { data: { source: 'AC', target: 'KG', AuthColor: 'black', width: 10, Arrow: 'none' } },
//        { data: { source: 'KG', target: 'AR', AuthColor: 'black', width: 10, Arrow: 'none' } },
//        { data: { source: 'AR', target: 'IS', AuthColor: 'black', width: 10, Arrow: 'none' } },
//        { data: { source: 'IS', target: 'LS', AuthColor: 'black', width: 10, Arrow: 'none' } },
//        { data: { source: 'LS', target: 'NT', AuthColor: 'black', width: 10, Arrow: 'none' } },
//        { data: { source: 'NT', target: 'ZT', AuthColor: 'black', width: 10, Arrow: 'none' } },
//        { data: { source: 'ZT', target: 'MW', AuthColor: 'black', width: 10, Arrow: 'none' } },
//        { data: { source: 'MW', target: 'AC', AuthColor: 'black', width: 10, Arrow: 'none' } },
		//Author-post edges
		//--Reading posts
        { data: { source: 'AC', target: '23', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'KG', target: '4', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'AR', target: '13', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'IS', target: '22', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'LS', target: '18', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'NT', target: '17', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'ZT', target: '1', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'MW', target: '14', AuthColor: 'red', width: 10, Arrow: 'none' } },
		//--Reflection posts
        { data: { source: 'AC', target: '31', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'KG', target: '26', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'AR', target: '29', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'IS', target: '28', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'LS', target: '36', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'NT', target: '32', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'ZT', target: '25', AuthColor: 'red', width: 10, Arrow: 'none' } },
        { data: { source: 'MW', target: '27', AuthColor: 'red', width: 10, Arrow: 'none' } },


    ]
}