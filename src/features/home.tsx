import ContentBox from "@/components/diagnosis/ContentBox"

export const Home = () => {
  return (
    <div className=' bg-gray-200'>
      <ContentBox.Root>
        <ContentBox.Title>Titulo</ContentBox.Title>
        <ContentBox.Body>Corpo</ContentBox.Body>
      </ContentBox.Root>
    </div>
  )
}

