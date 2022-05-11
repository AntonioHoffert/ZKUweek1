curl -# "http://ftp.gnu.org/gnu/wget/wget-1.17.1.tar.xz" -o "wget.tar.xz"
tar xf wget.tar.xz
cd wget-1.17.1
./configure --with-ssl=openssl -with-libssl-prefix=/usr/local/ssl && make -j8 && make install