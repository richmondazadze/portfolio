/** Keep long brand names together at natural word boundaries. */
export default function ProjectName({ name }) {
  return name === 'RichverseEcoTech' ? <>Richverse<wbr />EcoTech</> : name;
}
