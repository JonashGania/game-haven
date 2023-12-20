export function cutParagraph(paragraph){
    const sentences = paragraph.split(/[.!?]/);
    const filteredSentences = sentences.filter(sentences => sentences.trim() !== '');
    const fiveSentences = filteredSentences.slice(0, 7);
    const resultParagraph = fiveSentences.join('. ');

    return resultParagraph;
}