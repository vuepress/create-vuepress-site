FROM ubuntu:18.04
RUN \
  # configure the "vuepress" user
  groupadd vuepress && \
  useradd vuepress -s /bin/bash -m -g vuepress -G sudo && \
  echo 'vuepress:vuepress' |chpasswd && \
  mkdir /home/vuepress/app && \
  export DEBIAN_FRONTEND=noninteractive && \
  export TZ=Europe\Paris && \
  ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && \
  apt-get update && \
  # install utilities
  apt-get install -y \
    wget \
    sudo && \
  # install node.js
  wget https://nodejs.org/dist/v12.18.3/node-v12.18.3-linux-x64.tar.gz -O /tmp/node.tar.gz && \
  tar -C /usr/local --strip-components 1 -xzf /tmp/node.tar.gz && \
  # upgrade npm
  npm install -g npm && \
  # cleanup
  apt-get clean && \
  rm -rf \
    /home/vuepress/.cache/ \
    /var/lib/apt/lists/* \
    /tmp/* \
    /var/tmp/*

# install vuepress
RUN npm install -g create-vuepress-site

RUN \
  # fix vuepress user permissions
  chown -R vuepress:vuepress \
    /home/vuepress \
    /usr/local/lib/node_modules && \
  # cleanup
  rm -rf \
    /home/vuepress/.cache/ \
    /var/lib/apt/lists/* \
    /tmp/* \
    /var/tmp/*

# expose the working directory
USER vuepress
ENV PATH $PATH:/usr/bin
WORKDIR "/home/vuepress/app"
VOLUME ["/home/vuepress/app"]
CMD ["npx", "create-vuepress-site"]