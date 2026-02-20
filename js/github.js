// 🍱 LinkBento — GitHub Integration
// GitHub API, skills & portfolio rendering

// =============== GITHUB API ===============
async function fetchGithubData() {
    if (!CONFIG.githubUsername) return;
    try {
        // Fetch user data and repos in parallel
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${CONFIG.githubUsername}`),
            fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=100`)
        ]);
        
        if (userRes.ok && reposRes.ok) {
            const userData = await userRes.json();
            const repos = await reposRes.json();
            
            // Update stats with animation
            const repoCount = document.getElementById('repoCount');
            const followerCount = document.getElementById('followerCount');
            if (repoCount) animateCounter(repoCount, userData.public_repos || 0);
            if (followerCount) animateCounter(followerCount, userData.followers || 0);
            
            // Extract languages from repos
            const languages = {};
            repos.forEach(repo => {
                if (repo.language) {
                    languages[repo.language] = (languages[repo.language] || 0) + 1;
                }
            });
            
            // Sort by usage and take top 8
            const topLanguages = Object.entries(languages)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 8)
                .map(([lang]) => lang);
            
            // Render skills from GitHub languages
            cachedGithubLanguages = topLanguages;
            renderSkillsFromGithub(topLanguages);
            
            // Get top repos (by stars, then by recent update)
            const topRepos = repos
                .filter(repo => !repo.fork && repo.description) // Non-forks with description
                .sort((a, b) => {
                    // Sort by stars first, then by update date
                    if (b.stargazers_count !== a.stargazers_count) {
                        return b.stargazers_count - a.stargazers_count;
                    }
                    return new Date(b.updated_at) - new Date(a.updated_at);
                })
                .slice(0, 4);
            
            // Render portfolio from GitHub repos
            cachedGithubRepos = topRepos;
            renderPortfolioFromGithub(topRepos);
        }
    } catch (err) {
        console.log('GitHub API error:', err);
    }
}

function renderSkillsFromGithub(languages) {
    const container = document.getElementById('skillsContainer');
    if (!container || languages.length === 0) return;
    
    container.innerHTML = languages.map((lang, index) => 
        `<span class="skill-badge" style="animation-delay: ${index * 0.1}s">
            <i class="devicon-${getDevIcon(lang)} colored"></i> ${lang}
        </span>`
    ).join('');
}

function getDevIcon(language) {
    const icons = {
        'JavaScript': 'javascript-plain',
        'TypeScript': 'typescript-plain',
        'Python': 'python-plain',
        'Java': 'java-plain',
        'C#': 'csharp-plain',
        'C++': 'cplusplus-plain',
        'C': 'c-plain',
        'Go': 'go-plain',
        'Rust': 'rust-plain',
        'Ruby': 'ruby-plain',
        'PHP': 'php-plain',
        'Swift': 'swift-plain',
        'Kotlin': 'kotlin-plain',
        'HTML': 'html5-plain',
        'CSS': 'css3-plain',
        'Shell': 'bash-plain',
        'Dart': 'dart-plain',
        'Vue': 'vuejs-plain',
        'React': 'react-original'
    };
    return icons[language] || 'devicon-plain';
}

function renderPortfolioFromGithub(repos) {
    const container = document.getElementById('portfolioContainer');
    if (!container || repos.length === 0) return;
    
    container.innerHTML = repos.map((repo, index) => `
        <a href="${repo.html_url}" target="_blank" class="portfolio-card-link" style="text-decoration: none; color: inherit;">
            <div class="portfolio-card" style="animation-delay: ${index * 0.15}s">
                <div class="portfolio-header">
                    <i class="fas fa-folder-open"></i>
                    <div class="portfolio-stats">
                        <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                        <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                    </div>
                </div>
                <div class="portfolio-info">
                    <h4>${repo.name}</h4>
                    <p>${repo.description || ''}</p>
                    <div class="portfolio-meta">
                        ${repo.language ? `<span class="repo-lang"><span class="lang-dot" style="background: ${getLanguageColor(repo.language)}"></span>${repo.language}</span>` : ''}
                    </div>
                    <span class="portfolio-link">
                        ${translations[currentLang]['view-project']} <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </a>
    `).join('');
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Python': '#3572A5',
        'Java': '#b07219',
        'C#': '#178600',
        'C++': '#f34b7d',
        'C': '#555555',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Ruby': '#701516',
        'PHP': '#4F5D95',
        'Swift': '#F05138',
        'Kotlin': '#A97BFF',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Shell': '#89e051',
        'Vue': '#41b883'
    };
    return colors[language] || '#858585';
}

// Fetch GitHub data on load
fetchGithubData();

