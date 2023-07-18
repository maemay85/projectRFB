import { ColumnContainer } from "./styled-components/Containers"
import ResourceCard from "./styled-components/ResourceCard"



const TenantResources = () => {
  const tenantResources = [
    {
      title: 'resource one',
      tagline: 'A brief description of this resource for tenants',
      url: 'url of the resource',
      imageUrl: 'image url for the resource'
    },

    {
      title: 'resource two',
      tagline: 'A brief description of this resource for tenants',
      url: 'url of the resource',
      imageUrl: 'image url for the resource'
    },
    {
      title: 'resource three',
      tagline: 'A brief description of this resource for tenants',
      url: 'url of the resource',
      imageUrl: 'image url for the resource'
    },
  ]

  console.log(tenantResources)

  return (
    <>
      <ColumnContainer margin='10rem 0 0 0' width='100vw'>
        {tenantResources.map((resource)=>{
          return (
            <ResourceCard
              key={resource.title}
              text={resource.title}
              url={resource.url}
              tagline={resource.tagline}
              imageUrl={resource.imageUrl}
            />
          )
        })

        }
      </ColumnContainer>
    </>
  )
}

export default TenantResources
