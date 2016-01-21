describe('wordpuzzle', function(){
  
  it('will remove vowels and replace with a -', function() {
    expect(wordpuzzle('howdy joe')).to.equal('h-wdy j--');
  });
});
