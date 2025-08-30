import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 11, fontFamily: "Helvetica" },
  header: { textAlign: "center", marginBottom: 20 },
  name: { fontSize: 20, fontWeight: "bold" },
  contact: { fontSize: 10, color: "gray", marginTop: 4 },
  section: { marginBottom: 14 },
  heading: { fontSize: 14, marginBottom: 6, fontWeight: "bold", borderBottom: "1 solid #000" },
  role: { fontWeight: "bold" },
  org: { fontStyle: "italic", color: "gray" },
  item: { marginBottom: 6 },
  bullet: { marginLeft: 12 },
});


export default function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
  {/* Header */}
  <View style={styles.header}>
    <Text style={styles.name}>Jacob Vazquez</Text>
    <Text style={styles.contact}>
      San Francisco, CA • jacobvazquez.com • github.com/Jacob9610 • vazquezjake@live.com • (832) 431-7357
    </Text>
  </View>

  {/* Experience */}
  <View style={styles.section}>
    <Text style={styles.heading}>Experience</Text>
    {experiences.map((exp) => (
      <View key={exp.id} style={styles.item}>
        <Text style={styles.role}>
          {exp.role} — {exp.org} <Text style={styles.org}>({exp.date})</Text>
        </Text>
        {exp.bullets.map((b, i) => (
          <Text key={i} style={styles.bullet}>• {b}</Text>
        ))}
      </View>
    ))}
  </View>

  {/* Education */}
  <View style={styles.section}>
    <Text style={styles.heading}>Education</Text>
    {education.map((ed) => (
      <View key={ed.id} style={styles.item}>
        <Text style={styles.role}>{ed.title}</Text>
        <Text style={styles.org}>
          {ed.institution} ({ed.date})
        </Text>
      </View>
    ))}
  </View>

  {/* Skills */}
  <View style={styles.section}>
    <Text style={styles.heading}>Skills</Text>
    {skills.map((group) => (
      <Text key={group.category}>
        {group.category}: {group.items.join(", ")}
      </Text>
    ))}
  </View>
</Page>

    </Document>
  );
}
