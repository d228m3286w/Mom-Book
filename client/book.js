var React = require("react");

var App = React.createClass({
    render: function() {
        return (
         <div>
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" id="boxBook" >
              <h2 id="bookName">A Line in the Sand: The Battle to Integrate the Nantucket Public Schools 1825-1847</h2>
            	<div id="bookDetails">
            		<img src="/img/line.jpg" id="book-img" alt="line in the sand"/>
			            <p className="textAboutBook">A monumental struggle for equal rights took place on Nantucket in the 1840s. On one side were 
			            the island s black community and their abolitionist allies joined by renowned anti-slavery advocates 
			            Frederick Douglass, William Lloyd Garrison, and Stephen S. Foster. On the other side were prominent 
			            town citizens who wanted no part of integration. In 1978, a teacher from Nantucket was permitted to 
			            search the state archives for documents on the subject. In a box of uncatalogued papers, she found 
			            petitions sent in 1845 from Nantucket to the state s General Court describing the injustices suffered 
			            by students confined to the island s African School and pleading for legislation to make it possible for 
			            them to attend Nantucket s other public schools. The petitions say it all, especially one signed by a 
			            young woman who at that point had been waiting years for the opportunity to enter high school. From the 
			            petitions, town records, court records, newspapers, and letters, Barbara White has reconstructed the story
			             of how perseverance on the part of islanders men and women, black and white together overcame cruel racial 
			             prejudice. Throughout our country s history, the very same battle has been fought and won again and again. 
			             In this book, Barbara White has returned to us an inspiring account of courage in the face of adversity for 
			             Nantucket, New England, and the nation as a whole.</p>
              		</div> 
            	</div>

            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" id="boxBook2" >
              <h2 id="bookName2">Live to the Truth: The Life and Times of Cyrus Peirce: Crusader for 
              	American Public Education Founder of the First Public Teacher-Training School in the Nation</h2>
            	<div id="bookDetails2">
            		<img src="/img/cyrus.jpg" id="book-img" alt="cyrus"/>
			          <p className="textAboutBook2">This is a biography of Cyrus Peirce who was the founder of the first public teacher training school 
			          in the United States. With Horace Mann, Peirce was an important crusader for public education. Peirce 
			          was chosen by Mann in 1839 to direct the Lexington Normal School in Lexington, Massachusetts. The women 
			          who attended the school were the first specifically trained teachers in the country funded by public money. 
			          The curriculum that Peirce created became the basis for normal schools around the country, most of which evolved 
			          into our state university systems. Peirce deserves credit for insisting on student teaching, now taken for granted 
			          as an important part of teacher education. Ultra-conservative forces set out to destroy Peirce and the normal school. 
			          They believed that his "soft" approach to children, which rejected corporal punishment and rote memorization, was dangerous 
			          and un-American. An evening of dramatic tableaux at the school in 1846 was fodder for sensational headlines in Boston for 
			          over two years as Peirce was accused of allowing and condoning indecent and inappropriate behavior. The story of how Peirce 
			          and Mann defended themselves and the school makes for a gripping tale. The story of Cyrus Peirce, who lived between the American 
			          Revolution and the Civil War, is a case study of the tensions in American society at the time. While his primary contribution was 
			          in the field of education, Peirce was also involved in other reform movements. He was an ardent abolitionist who helped lead the 
			          fight to desegregate Nantuckets public schools which led to the passage of the earliest civil rights law to guarantee equal access
			          to public education. He defied the "gag" rule of the House of Representatives when he tried to present a petition with John Quincy
			          Adams to amend the Constitution and eliminate the counting of slaves as three-fifths of a person for distributing seats in the House. 
			          He was also an early leader in the woman's suffrage movement and advocated for equal pay and equal education for women during his entire 
			          life. He believed in non-violent resistance and attended the Paris Peace Congress of 1849. Peirce's legacy lives on in the countless 
			          number of teachers who have benefitted from enhanced teacher training, as well as the students who benefitted from better teaching. 
			          While Horace Mann has been fully recognized for his place in the history of American public education, the role of Peirce has been 
			          overlooked. This book resurrects the vital role that Peirce played, a role that was well-recognized by his contemporaries, but has 
			          slipped from modern histories</p>
              	</div> 
         	</div>
              
        </div>
        );
    }
});


module.exports = App;