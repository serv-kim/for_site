:set autoindent
:set expandtab
:set tabstop =2
:set shiftwidth=2
:set number


if &compatible
  set nocompatible               " Be iMproved
endif

set runtimepath^=/home/kimken/.vim/bundle/neobundle.vim/


call neobundle#begin(expand('/home/kimken/.vim/bundle'))

 " Let NeoBundle manage NeoBundle
" Required:
 NeoBundleFetch 'Shougo/neobundle.vim'

" " Add or remove your Bundles here:
 NeoBundle 'mattn/emmet-vim'
 "
" " You can specify revision/branch/tag.
 NeoBundle 'Shougo/vimshell', { 'rev' : '3787e5' }
"
" " Required:
 call neobundle#end()
"
" " Required:
 filetype plugin indent on
"
" " If there are uninstalled bundles found on startup,
" " this will conveniently prompt you to install them.
 NeoBundleCheck
