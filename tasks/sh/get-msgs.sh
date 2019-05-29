# Создает .po файл, путь и имя которого указаны в $1 и передает туда строки для перевода из файлов, пеерчисленных в php-list
touch $1
xgettext -j -f tmp/php-list --keyword=__ --keyword=_e -o $1
