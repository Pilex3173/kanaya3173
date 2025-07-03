
document.addEventListener("DOMContentLoaded", () => {
  const validatorList = document.getElementById("validator-status");
  if (validatorList) {
    const validators = [
      { name: "Empe", url: "https://explorer.maouam.nodelab.my.id/empeiria-testnet/staking/empevaloper1cf7kj0rcfteqepuh8cjxlrkw432xyzzm3hcv4l" },
      { name: "Lumera", url: "#" },
      { name: "Zenchain", url: "#" },
      { name: "Helios", url: "#" },
      { name: "Xos", url: "#" }
    ];
    validators.forEach(v => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${v.url}" target="_blank">${v.name}</a>: <span class="status">Online</span>`;
      validatorList.appendChild(li);
    });
  }

  const blogContainer = document.getElementById("blog-posts");
  if (blogContainer) {
    fetch("posts.json")
      .then(res => res.json())
      .then(data => {
        blogContainer.innerHTML = data.map(post => `
          <article class="blog-post">
            <h3>${post.title}</h3>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
          </article>
        `).join('');
      });
  }
});
