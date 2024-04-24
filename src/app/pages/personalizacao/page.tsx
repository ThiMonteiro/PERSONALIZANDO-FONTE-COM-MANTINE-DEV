import { Slider, Space, Text, Select, Box} from '@mantine/core';

function Customize({setFontSize, setFontFamily}: any) {
  
    const marksFontSize = [
      { value: 0, label: '12px', px: 12},
      { value: 25, label: '14px', px: 14},
      { value: 50, label: '16px', px: 16},
      { value: 75, label: '18px', px: 18},
      { value: 100, label: '20px', px: 20},
    ];

    return (
      <>
        <Space h="md"/>
        <Box style={{ overflow: 'hidden' }}>
          <Box maw={900} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
            <Text fw={500} size='sm'>Tamanho Fonte</Text>
            <Slider
              
              defaultValue={50}
              onChange={(value) => { 
                const selectedMark = marksFontSize.find((mark) => mark.value === value);
                if (selectedMark){
                  setFontSize(selectedMark.px);
                }
              }}
              label={(val) => marksFontSize.find((mark) => mark.value === val)?.label}
              step={25}
              marks={marksFontSize}
              styles={{ markLabel: { display: 'none' } }}
            />
      
            <Space h="md"/>
      
            <Text fw={500} size='sm'>Tipo de Fonte</Text>
        
            <Select
              placeholder="Escolha sua fonte"
              data={[
                {value: "'PT Serif', serif", label:"Serif"},
                {value: "'Open Sans', sans-serif", label:"Open Sans"},
                {value: "'Roboto Mono', monospace", label:"Roboto"},
              ]}
              onChange={(value) => {
                setFontFamily(value);
              }}
               
            />
          </Box>
        </Box>
  
  
      </>
    );
  
}

export default Customize;