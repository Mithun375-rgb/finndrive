import { motion } from "framer-motion";

export interface MindMapNode {
  label: string;
  children?: MindMapNode[];
}

export interface MindMapData {
  central: string;
  branches: MindMapNode[];
}

const branchColors = [
  "bg-primary/20 border-primary/40 text-primary",
  "bg-emerald-500/20 border-emerald-500/40 text-emerald-600 dark:text-emerald-400",
  "bg-amber-500/20 border-amber-500/40 text-amber-600 dark:text-amber-400",
  "bg-blue-500/20 border-blue-500/40 text-blue-600 dark:text-blue-400",
  "bg-rose-500/20 border-rose-500/40 text-rose-600 dark:text-rose-400",
  "bg-purple-500/20 border-purple-500/40 text-purple-600 dark:text-purple-400",
];

const lineColors = [
  "border-primary/50",
  "border-emerald-500/50",
  "border-amber-500/50",
  "border-blue-500/50",
  "border-rose-500/50",
  "border-purple-500/50",
];

export function MindMap({ data }: { data: MindMapData }) {
  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="min-w-[600px] flex flex-col items-center gap-8">
        {/* Central Node */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="px-6 py-3 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-display font-bold text-lg shadow-lg"
        >
          {data.central}
        </motion.div>

        {/* Branches */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {data.branches.map((branch, i) => {
            const colorIndex = i % branchColors.length;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
                className="flex flex-col items-center"
              >
                {/* Connector line */}
                <div className={`w-px h-4 border-l-2 border-dashed ${lineColors[colorIndex]}`} />

                {/* Branch node */}
                <div className={`px-4 py-2 rounded-xl border-2 font-semibold text-sm text-center ${branchColors[colorIndex]}`}>
                  {branch.label}
                </div>

                {/* Children */}
                {branch.children && branch.children.length > 0 && (
                  <div className="flex flex-col items-center mt-1">
                    <div className={`w-px h-3 border-l-2 border-dashed ${lineColors[colorIndex]}`} />
                    <div className="flex flex-col gap-1.5">
                      {branch.children.map((child, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 * (i + 1) + 0.05 * j }}
                          className="flex items-center gap-2"
                        >
                          <span className={`w-2 h-2 rounded-full ${branchColors[colorIndex].split(' ')[0]}`} />
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {child.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
