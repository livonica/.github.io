const userStats = {
	username: 'tima toma',
	country: 'Russian Federation',
	globalRank: 109675,
	countryRank: 9751,
	pp: 4569,
	accuracy: 97.25,
	playCount: 18313,
	totalScore: 11383569014,
	rankedScore: 8765432109,
	totalHits: 4196673,
	maximumCombo: 1414,
	replaysWatched: 1337,
	ssRanks: 6,
	sRanks: 15,
	aRanks: 457,
	medals: 45,
	level: 87,
	totalPlayTime: '13d 21h 17m',
	joinDate: '2019-05-15',
}

const pages = {
	home: `
					<div class="profile animate-slide-in">
							<div class="avatar">
									<img src="https://a.ppy.sh/29459946?1687467521.jpeg&quot" alt="${
										userStats.username
									}">
							</div>
							<div class="user-info">
									<h1>${userStats.username}</h1>
									<p>${userStats.country}</p>
							</div>
					</div>
					<div class="stats-grid">
							<div class="stat-card">
									<h3>Global Rank</h3>
									<p>#${userStats.globalRank.toLocaleString()}</p>
							</div>
							<div class="stat-card">
									<h3>Country Rank</h3>
									<p>#${userStats.countryRank.toLocaleString()}</p>
							</div>
							<div class="stat-card">
									<h3>Performance Points</h3>
									<p>${userStats.pp.toLocaleString()}</p>
							</div>
							<div class="stat-card">
									<h3>Accuracy</h3>
									<p>${userStats.accuracy.toFixed(2)}%</p>
							</div>
					</div>
					<div class="detail-section">
							<h3>Play Statistics</h3>
							<div class="detail-item">
									<span>Play Count</span>
									<span>${userStats.playCount.toLocaleString()}</span>
							</div>
							<div class="detail-item">
									<span>Total Score</span>
									<span>${userStats.totalScore.toLocaleString()}</span>
							</div>
							<div class="detail-item">
									<span>Ranked Score</span>
									<span>${userStats.rankedScore.toLocaleString()}</span>
							</div>
							<div class="detail-item">
									<span>Total Hits</span>
									<span>${userStats.totalHits.toLocaleString()}</span>
							</div>
							<div class="detail-item">
									<span>Maximum Combo</span>
									<span>${userStats.maximumCombo.toLocaleString()}</span>
							</div>
							<div class="detail-item">
									<span>Replays Watched by Others</span>
									<span>${userStats.replaysWatched.toLocaleString()}</span>
							</div>
					</div>
					<div class="detail-section">
							<h3>Achievements</h3>
							<div class="detail-item">
									<span>SS Ranks</span>
									<span>${userStats.ssRanks}</span>
							</div>
							<div class="detail-item">
									<span>S Ranks</span>
									<span>${userStats.sRanks}</span>
							</div>
							<div class="detail-item">
									<span>A Ranks</span>
									<span>${userStats.aRanks}</span>
							</div>
							<div class="detail-item">
									<span>Medals</span>
									<span>${userStats.medals}</span>
							</div>
					</div>
					<div class="detail-section">
							<h3>Player Info</h3>
							<div class="detail-item">
									<span>Level</span>
									<span>${userStats.level}</span>
							</div>
							<div class="detail-item">
									<span>Total Play Time</span>
									<span>${userStats.totalPlayTime}</span>
							</div>
							<div class="detail-item">
									<span>Join Date</span>
									<span>${userStats.joinDate}</span>
							</div>
					</div>
			`,
	rankings: `
					<h2>Rankings</h2>
					<div class="stats-grid">
							<div class="stat-card">
									<h3>Global Rank</h3>
									<p>#${userStats.globalRank.toLocaleString()}</p>
									<div class="progress-bar">
											<div class="progress" style="width: ${
												100 - userStats.globalRank / 10000
											}%;"></div>
									</div>
							</div>
							<div class="stat-card">
									<h3>Country Rank</h3>
									<p>#${userStats.countryRank.toLocaleString()}</p>
									<div class="progress-bar">
											<div class="progress" style="width: ${
												100 - userStats.countryRank / 1000
											}%;"></div>
									</div>
							</div>
							<div class="stat-card">
									<h3>Performance Points</h3>
									<p>${userStats.pp.toLocaleString()}</p>
									<div class="progress-bar">
											<div class="progress" style="width: ${(userStats.pp / 10000) * 100}%;"></div>
									</div>
							</div>
					</div>
					<div class="detail-section">
							<h3>Ranking Progress</h3>
							<p>Keep practicing and improving your scores to climb the ranks! Your current accuracy of ${userStats.accuracy.toFixed(
								2
							)}% is impressive. With ${userStats.playCount.toLocaleString()} plays, you're gaining valuable experience. Remember, consistency is key in osu! Keep pushing your limits and you'll see your rank improve over time.</p>
					</div>
			`,
	community: `
					<h2>Community Activity</h2>
					<div class="stats-grid">
							<div class="stat-card">
									<h3>Forum Posts</h3>
									<p>23</p>
							</div>
							<div class="stat-card">
									<h3>Comments</h3>
									<p>158</p>
							</div>
							<div class="stat-card">
									<h3>Beatmaps Shared</h3>
									<p>5</p>
							</div>
					</div>
					<div class="detail-section">
							<h3>Community Highlights</h3>
							<div class="detail-item">
									<span>🏆 Top 10% in accuracy</span>
									<span>Your accuracy of ${userStats.accuracy.toFixed(
										2
									)}% puts you in the top players!</span>
							</div>
							<div class="detail-item">
									<span>🌟 Rising Star</span>
									<span>You've climbed ${(
										1000000 - userStats.globalRank
									).toLocaleString()} ranks since joining!</span>
							</div>
							<div class="detail-item">
									<span>🎵 Rhythm Master</span>
									<span>You've hit a total of ${userStats.totalHits.toLocaleString()} notes. Keep the rhythm going!</span>
							</div>
					</div>
			`,
	support: `
					<h2>Support Center</h2>
					<div class="stats-grid">
							<div class="stat-card">
									<h3>FAQ</h3>
									<p>Find answers to common questions about gameplay, ranking, and more.</p>
							</div>
							<div class="stat-card">
									<h3>Contact Support</h3>
									<p>Need personalized help? Our support team is here for you.</p>
							</div>
					</div>
					<div class="detail-section">
							<h3>Your Recent Activity</h3>
							<div class="detail-item">
									<span>Last Login</span>
									<span>2 hours ago</span>
							</div>
							<div class="detail-item">
									<span>Last Play Session</span>
									<span>${userStats.totalPlayTime} total play time</span>
							</div>
					</div>
					<div class="detail-section">
							<h3>Important Notice</h3>
							<p>Remember to take regular breaks and maintain good posture while playing. Your health is important!</p>
					</div>
			`,
	help: `
					<h2>Help Center</h2>
					<div class="stats-grid">
							<div class="stat-card">
									<h3>Gameplay Basics</h3>
									<ul>
											<li>How to read beatmaps</li>
											<li>Understanding hit circles and sliders</li>
											<li>Mastering timing and accuracy</li>
									</ul>
							</div>
							<div class="stat-card">
									<h3>Improving Your Skills</h3>
									<ul>
											<li>Practice strategies for beginners</li>
											<li>Advanced techniques for veterans</li>
											<li>Using mods to challenge yourself</li>
									</ul>
							</div>
							<div class="stat-card">
									<h3>Understanding Rankings</h3>
									<ul>
											<li>How the global ranking system works</li>
											<li>Calculating Performance Points (PP)</li>
											<li>Tips for climbing the leaderboards</li>
									</ul>
							</div>
							<div class="stat-card">
									<h3>Creating Beatmaps</h3>
									<ul>
											<li>Introduction to the osu! editor</li>
											<li>Beatmapping best practices</li>
											<li>Getting your maps ranked</li>
									</ul>
							</div>
					</div>
					<div class="detail-section">
							<h3>Need More Help?</h3>
							<p>If you can't find the answer you're looking for, don't hesitate to reach out to our community forums or contact our support team. We're here to help you enjoy your osu! experience to the fullest!</p>
					</div>
			`,
}

function loadPage(pageName) {
	const mainContent = document.getElementById('main-content')
	mainContent.innerHTML = pages[pageName]

	document.querySelectorAll('.nav-link').forEach(link => {
		link.classList.remove('active')
		if (link.dataset.page === pageName) {
			link.classList.add('active')
		}
	})

	document.querySelectorAll('.progress').forEach(progress => {
		progress.style.width = '0%'
		setTimeout(() => {
			progress.style.width = progress.parentElement.dataset.progress
		}, 100)
	})
}

document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault()
		loadPage(e.target.dataset.page)
	})
})

loadPage('home')
