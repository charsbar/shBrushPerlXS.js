use strict;
use warnings;
use FindBin;
use Perl::APIReference;
use Text::MicroTemplate 'encoded_string';
use Text::MicroTemplate::File;

our $VERSION = '0.01';

my @keywords =
  grep { !/<[^>]+>/ } # ignore PL_parser->*
  sort keys %{ Perl::APIReference->new(perl_version => 'newest')->index };

my @keyword_lines;
while(my @words = splice @keywords, 0, 7) {
  my $eol = @keywords ? ' +' : ';';
  push @keyword_lines, map { encoded_string("'$_ '$eol") } join ' ', @words;
}

my $mt = Text::MicroTemplate::File->new;
open my $fh, '>', "$FindBin::Bin/../shBrushPerlXS.js" or die $!;
print $fh $mt->render_file("$FindBin::Bin/../template/shBrushPerlXS.js.tmpl", {
  version => $VERSION,
  keywords => \@keyword_lines,
  api_version => $Perl::APIReference::VERSION,
});
