import { Box, Table, Th, Td, Tr, Thead, Tbody } from "@chakra-ui/react";
import vacine from "../data/csvjson.json";

export default function Vacicanaco() {
  return (
    <Box p={10}>
      <Table size={"sm"}>
        <Thead>
          <Tr>
            <Th>CNS</Th>
            <Th>Nome</Th>
            <Th>Sexo</Th>
            <Th>idade</Th>
            <Th>Municipio</Th>
            <Th>Data Aplicação</Th>
            <Th>Dose</Th>
            <Th>Fabricante</Th>
            <Th>Lote</Th>
            <Th>Vacina</Th>
            <Th>Vacinador</Th>
            <Th>Local</Th>
            <Th>Estabelecimento</Th>
          </Tr>
        </Thead>
        <Tbody>
          {vacine.map((vac) => (
            <Tr key={vac.paciente_cns}>
              <Td>{vac.paciente_cns}</Td>
              <Td>{vac.paciente_nome}</Td>
              <Td>{vac.paciente_enumSexoBiologico}</Td>
              <Td>{vac.paciente_idade}</Td>
              <Td>{vac.paciente_endereco_nmMunicipio}</Td>
              <Td>{vac.vacina_dataAplicacao}</Td>
              <Td>{vac.vacina_descricao_dose}</Td>
              <Td>{vac.vacina_fabricante_nome}</Td>
              <Td>{vac.vacina_lote}</Td>
              <Td>{vac.vacina_nome}</Td>
              <Td>{vac.vacina_profissionalAplicador_nome}</Td>
              <Td>
                {vac.estabelecimento_municipio_nome} - {vac.estabelecimento_uf}
              </Td>
              <Td>{vac.estabelecimento_valor}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
