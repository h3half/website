This is the readme for the git.

This project is just a website I have set up for fun, hosted on the Raspberry Pi sitting a few feet away from me. This website will probably never see the open internet. This README, on the other hand, will, because I don't care enough about its privacy that I'm willing to pay for a private repo.

NOTES:
The website itself is hosted by the Raspberry Pi running Apache. On the Pi the server's root is /var/www/html, which itself is symbolically linked to ~/website/html. Note that ~/website is the root directory of this git project -- only files placed inside the ~/website/html folder will appear on the website. Thus, ~/website is just for git-related things, while ~/website/html is where most files will appear.
