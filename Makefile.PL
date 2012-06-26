use strict;
use warnings;
use ExtUtils::MakeMaker;

WriteMakefile(
  NAME => 'shBrushPerlXS.js',
  AUTHOR => 'Kenichi Ishigaki <ishigaki@cpan.org>',
  VERSION => '0.01',
  LICENSE => 'MIT',
  PREREQ_PM => {
    'Perl::APIReference' => 0,
    'Text::MicroTemplate' => 0,
  },
);
