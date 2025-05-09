document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const usernameInput = document.getElementById('username');
    const profileContainer = document.getElementById('profile-container');
    const errorMessage = document.getElementById('error-message');

    // Elements for user data
    const avatar = document.getElementById('avatar');
    const nameElement = document.getElementById('name');
    const loginElement = document.getElementById('login');
    const bioElement = document.getElementById('bio');
    const profileLink = document.getElementById('profile-link');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const repos = document.getElementById('repos');
    const gists = document.getElementById('gists');
    const locationElement = document.getElementById('location');
    const locationContainer = document.getElementById('location-container');
    const companyElement = document.getElementById('company');
    const companyContainer = document.getElementById('company-container');
    const blogElement = document.getElementById('blog');
    const blogContainer = document.getElementById('blog-container');
    const twitterElement = document.getElementById('twitter');
    const twitterContainer = document.getElementById('twitter-container');
    const createdAtElement = document.getElementById('created-at');
    const createdContainer = document.getElementById('created-container');

    // Add event listeners
    searchBtn.addEventListener('click', fetchUserData);
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            fetchUserData();
        }
    });

    // Fetch user data from GitHub API
    async function fetchUserData() {
        const username = usernameInput.value.trim();
        
        if (!username) return;

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            
            if (!response.ok) {
                throw new Error('User not found');
            }

            const userData = await response.json();
            displayUserData(userData);
            profileContainer.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        } catch (error) {
            profileContainer.classList.add('hidden');
            errorMessage.classList.remove('hidden');
            console.error('Error fetching user data:', error);
        }
    }

    // Display user data in the UI
    function displayUserData(user) {
        // Set basic user info
        avatar.src = user.avatar_url;
        nameElement.textContent = user.name || user.login;
        loginElement.textContent = `@${user.login}`;
        bioElement.textContent = user.bio || 'No bio available';
        profileLink.href = user.html_url;

        // Set stats
        followers.textContent = formatNumber(user.followers);
        following.textContent = formatNumber(user.following);
        repos.textContent = formatNumber(user.public_repos);
        gists.textContent = formatNumber(user.public_gists);

        // Set additional info with conditional display
        if (user.location) {
            locationElement.textContent = user.location;
            locationContainer.classList.remove('hidden');
        } else {
            locationContainer.classList.add('hidden');
        }

        if (user.company) {
            companyElement.textContent = user.company;
            companyContainer.classList.remove('hidden');
        } else {
            companyContainer.classList.add('hidden');
        }

        if (user.blog) {
            blogElement.textContent = formatUrl(user.blog);
            blogElement.href = formatUrl(user.blog, true);
            blogContainer.classList.remove('hidden');
        } else {
            blogContainer.classList.add('hidden');
        }

        if (user.twitter_username) {
            twitterElement.textContent = `@${user.twitter_username}`;
            twitterElement.href = `https://twitter.com/${user.twitter_username}`;
            twitterContainer.classList.remove('hidden');
        } else {
            twitterContainer.classList.add('hidden');
        }

        if (user.created_at) {
            createdAtElement.textContent = `Joined ${formatDate(user.created_at)}`;
            createdContainer.classList.remove('hidden');
        } else {
            createdContainer.classList.add('hidden');
        }
    }

    // Format numbers for better display (e.g., 1000 -> 1k)
    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'm';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num;
    }

    // Format URL for display (remove http/https and trailing slash)
    function formatUrl(url, forHref = false) {
        if (forHref) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                return `https://${url}`;
            }
            return url;
        }
        
        return url
            .replace(/^https?:\/\//, '')
            .replace(/\/$/, '');
    }

    // Format date to readable format
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
}); 