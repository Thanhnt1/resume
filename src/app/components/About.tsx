import { motion } from "motion/react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    description: "React, Next.js, TypeScript, Node.js",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Sketch",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimization, SEO, Best Practices",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Git, Agile, Team Leadership",
    color: "from-green-500 to-emerald-500",
  },
];

export function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              Về tôi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Kỹ năng & Chuyên môn
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Với hơn 5 năm kinh nghiệm trong phát triển web và thiết kế, tôi mang đến những giải pháp sáng tạo và hiệu quả.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 grid md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-600">Dự án hoàn thành</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                30+
              </div>
              <p className="text-gray-600">Khách hàng hài lòng</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <p className="text-gray-600">Năm kinh nghiệm</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
